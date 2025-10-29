export type Role = 'user' | 'assistant' | 'system'

export interface Message {
  id: string
  role: Role
  text: string
  timestamp: number
}

// Request payload sent to the backend (aligns with chat-service OpenAPI ChatRequest)
export interface ChatRequest {
  sessionId: string
  content: string
  settings?: {
    model?: string
    temperature?: number
  }
}

// Acknowledgment returned by the backend when a message is accepted
export interface Ack {
  messageId: string
  status: string
}