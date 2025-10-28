package com.aus.project.jq.chat_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.aus.project.jq.chat_service.service.StreamService;

@RestController
@RequestMapping("/stream")
public class StreamController{

    private final StreamService streamService;

    @Autowired
    public StreamController(StreamService streamService) {
        this.streamService = streamService;
    }

    @GetMapping(path = "/chat/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter stream(@RequestParam String sessionId,
                                @RequestParam(required=false) String content,
                                @RequestParam(required=false) String model,
                                @RequestParam(required=false) Double temperature) {
        return streamService.openStream(sessionId, content, model, temperature);
    }
}

