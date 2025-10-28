package com.aus.project.jq.chat_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aus.project.jq.chat_service.model.AckResponse;
import com.aus.project.jq.chat_service.model.ChatRequest;
import com.aus.project.jq.chat_service.service.ChatService;


/**
 * Controller that calls ChatService to handle chat messages.
 */
@RestController
@RequestMapping("/chat")
public class ChatController {

    private final ChatService chatService;

    @Autowired
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/message")
    public ResponseEntity<AckResponse> sendMessage(@RequestBody ChatRequest chatRequest) {
        AckResponse ack = chatService.processMessage(chatRequest);
        return ResponseEntity.ok(ack);
    }
}
