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