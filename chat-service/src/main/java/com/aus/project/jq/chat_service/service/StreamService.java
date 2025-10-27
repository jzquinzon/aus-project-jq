package com.aus.project.jq.chat_service.service;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.Executors;

@Service
public class StreamService {

  public SseEmitter openStream(String sessionId, String content, String model, Double temperature) {
    var emitter = new SseEmitter(0L);

    Executors.newCachedThreadPool().execute(() -> {
      try {
        String text = "Echo: " + (content == null ? "No content" : content);
        for (String tok : text.split(" ")) {
          sendDelta(emitter, tok + " ");
          Thread.sleep(60);
        }
        sendDone(emitter);
        emitter.complete();
      } catch (Exception e) {
        emitter.completeWithError(e);
      }
    });

    return emitter;
  }

  private void sendDelta(SseEmitter em, String delta) {
    try {
      em.send(SseEmitter.event()
        .name("delta")
        .data(Map.of("type","delta","delta", delta)));
    } catch (IOException ignored) {}
  }

  private void sendDone(SseEmitter em) {
    try {
      em.send(SseEmitter.event()
        .name("done")
        .data(Map.of("type","done")));
    } catch (IOException ignored) {}
  }
}
