package com.aus.project.jq.chat_service.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aus.project.jq.chat_service.model.Conversation;
import com.aus.project.jq.chat_service.service.ConversationService;

@RestController
@RequestMapping("/conversation")
public class ConversationController {

    private final ConversationService conversationService;

    public ConversationController(ConversationService conversationService) {
        this.conversationService = conversationService;
    }

    // Create a new conversation
    @PostMapping
    public Conversation createConversation(UUID conversationId) {
        return conversationService.createConversation(conversationId);
    }

    // Get an existing conversation by UUID
    @GetMapping("/{conversationId}")
    public Optional<Conversation> getConversation(@PathVariable UUID conversationId) {
        return conversationService.getConversation(conversationId);
    }

    // Get all conversations
    @GetMapping("/conversation/all")
    public Optional<List<Conversation>> getAllConversations() {
        return conversationService.getAllConversations();
    }
}
