package com.aus.project.jq.chat_service.model;

/**
 * Acknowledgment response model w/ message ID and status.
 */
public record AckResponse(
    String messageId,
    String status
) {};