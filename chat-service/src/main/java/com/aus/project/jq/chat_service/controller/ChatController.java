package com.aus.project.jq.chat_service.controller;

import com.aus.project.jq.chat_service.service.ChatService;
import com.aus.project.jq.chat_service.model.ChatRequest;
import com.aus.project.jq.chat_service.model.AckResponse;


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
