package com.aus.project.jq.chat_service.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.aus.project.jq.chat_service.model.Conversation;
import com.aus.project.jq.chat_service.repository.ConversationRepository;


@Service
public class ConversationService {
    private final ConversationRepository conversationRepository;

    public ConversationService(ConversationRepository conversationRepository) {
        this.conversationRepository = conversationRepository;
    }

    public Conversation createConversation(UUID conversationId) {
        Conversation conversation = new Conversation();
        conversation.setConversationId(conversationId);
        return conversationRepository.save(conversation);
    }

    public Optional<Conversation> getConversation(UUID conversationId) {
        return conversationRepository.findByConversationId(conversationId);
    }

    public Optional<List<Conversation>> getAllConversations() {
        return Optional.of(conversationRepository.findAll());
    }
}
