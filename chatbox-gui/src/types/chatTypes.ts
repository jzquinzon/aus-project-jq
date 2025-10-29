export type Role = 'user' | 'assistant' | 'system'

export interface Message {
  id: string
  role: Role
  text: string
  timestamp: number
}