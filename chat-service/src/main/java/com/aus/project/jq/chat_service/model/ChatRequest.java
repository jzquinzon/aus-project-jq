package com.aus.project.jq.chat_service.model;

/**
 * chat request model w/ session information, message content, and model settings.
 */
public record ChatRequest(
    String sessionId,
    String content,
    ModelSettings settings
) {
    /**
     * model settings w/ name and temperature.
     */
    public record ModelSettings(
        String model,
        Double temperature
    ) {}
}