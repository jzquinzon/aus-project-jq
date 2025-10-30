package com.aus.project.jq.chat_service.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aus.project.jq.chat_service.model.Conversation;

// provides save(), findAll(), findById(), deleteById() (from JpaRepository) and custom method to find by conversationId
public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    Optional<Conversation> findByConversationId(UUID conversationId);
}
