package com.aus.project.jq.chat_service.controller;

@RestController
@RequestMapping("/stream");
public class StreamController{

    private final StreamService streamService;

    @Autowired
    public final StreamController(StreamService streamService) {
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

