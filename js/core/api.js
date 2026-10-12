/**
 * SlopeGuard — Unified API Client (api.js)
 * Wraps fetch(), injects CSRF headers, enforces 15s timeout, normalizes envelopes,
 * and provides offline mock fallback when backend is unreachable.
 */

window.LW = window.LW || {};

window.LW.api = (function() {
  const TIMEOUT_MS = 15000;

  function getCsrfToken() {
    const match = (document?.cookie || "").match(/XSRF-TOKEN=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  }

  async function request(path, options = {}) {
    const config = window.LW.config || { apiBase: "/api", useMock: true };
    const apiBase = config.apiBase || "/api";
    let url = path;
    if (!path.startsWith("http")) {
      if (path.startsWith(apiBase)) {
        url = path;
      } else {
        url = `${apiBase}${path.startsWith('/') ? '' : '/'}${path}`;
      }
    }

    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...options.headers
    };

    const csrf = getCsrfToken();
    if (csrf) {
      headers["X-XSRF-TOKEN"] = csrf;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        credentials: "include",
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const json = await response.json().catch(() => null);

      if (!response.ok) {
        throw {
          code: json?.code || (response.status === 401 ? "UNAUTHENTICATED" : (response.status === 403 ? "FORBIDDEN" : "API_ERROR")),
          message: json?.message || `Request failed with status ${response.status}`,
          status: response.status,
          fieldErrors: json?.fieldErrors || []
        };
      }

      return json; // Envelope { success: true, data: ..., message: ... }
    } catch (err) {
      clearTimeout(timeoutId);

      // If backend explicitly rejected authentication/authorization, do not mask with mock
      if (err && (err.status === 401 || err.status === 403)) {
        throw err;
      }

      // If network failed or mock enabled, attempt mock fallback
      if (config.useMock && window.LW.mockAdapter) {
        const mockPath = path.startsWith("http") ? path : (path.startsWith(apiBase) ? path : `${apiBase}${path.startsWith('/') ? '' : '/'}${path}`);
        const mockResult = window.LW.mockAdapter(mockPath, options);
        if (mockResult) {
          return mockResult;
        }
      }

      // Check if abort or offline
      if (err.name === "AbortError") {
        throw { code: "TIMEOUT", message: "Request timed out after 15 seconds.", offline: true };
      }

      if (!navigator.onLine || err.message?.includes("Failed to fetch")) {
        throw { code: "OFFLINE", message: "Network connection is unavailable.", offline: true };
      }

      throw err;
    }
  }

  return {
    get(path, params = {}) {
      const query = new URLSearchParams(params).toString();
      const url = query ? `${path}?${query}` : path;
      return request(url, { method: "GET" });
    },
    post(path, body = {}) {
      return request(path, { method: "POST", body: JSON.stringify(body) });
    },
    put(path, body = {}) {
      return request(path, { method: "PUT", body: JSON.stringify(body) });
    },
    delete(path) {
      return request(path, { method: "DELETE" });
    }
  };
})();
