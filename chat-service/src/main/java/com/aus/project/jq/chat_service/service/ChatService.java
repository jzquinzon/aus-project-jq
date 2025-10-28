package com.aus.project.jq.chat_service.service;

import org.springframework.stereotype.Service;
import com.aus.project.jq.chat_service.model.ChatRequest;
import com.aus.project.jq.chat_service.model.AckResponse;
import java.util.UUID;

@Service
public class ChatService {
    public AckResponse processMessage(ChatRequest chatRequest) {

        if (chatRequest == null || isBlank(chatRequest.sessionId()) || isBlank(chatRequest.content())) {
            //later map to your Error schema via @ControllerAdvice
            throw new IllegalArgumentException("sessionId and content are required");
        }

        String messageId = "msg_" + UUID.randomUUID();
        String status = "queued";
        return new AckResponse(messageId, status);
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
    
}