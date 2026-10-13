package com.slopeguard.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

/**
 * DTO reflecting AI model readiness, training provenance, and governance status.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class AiModelStatusResponse {

    @JsonProperty("service_status")
    private String serviceStatus;

    @JsonProperty("model_version")
    private String modelVersion;

    @JsonProperty("model_status")
    private String modelStatus;

    @JsonProperty("artifact_loaded")
    private Boolean artifactLoaded;

    @JsonProperty("training_dataset_type")
    private String trainingDatasetType;

    @JsonProperty("evaluation_summary")
    private Map<String, Object> evaluationSummary;

    private String disclaimer;
    private String timestamp;

    public AiModelStatusResponse() {
    }

    public String getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(String serviceStatus) {
        this.serviceStatus = serviceStatus;
    }

    public String getModelVersion() {
        return modelVersion;
    }

    public void setModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
    }

    public String getModelStatus() {
        return modelStatus;
    }

    public void setModelStatus(String modelStatus) {
        this.modelStatus = modelStatus;
    }

    public Boolean getArtifactLoaded() {
        return artifactLoaded;
    }

    public void setArtifactLoaded(Boolean artifactLoaded) {
        this.artifactLoaded = artifactLoaded;
    }

    public String getTrainingDatasetType() {
        return trainingDatasetType;
    }

    public void setTrainingDatasetType(String trainingDatasetType) {
        this.trainingDatasetType = trainingDatasetType;
    }

    public Map<String, Object> getEvaluationSummary() {
        return evaluationSummary;
    }

    public void setEvaluationSummary(Map<String, Object> evaluationSummary) {
        this.evaluationSummary = evaluationSummary;
    }

    public String getDisclaimer() {
        return disclaimer;
    }

    public void setDisclaimer(String disclaimer) {
        this.disclaimer = disclaimer;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
