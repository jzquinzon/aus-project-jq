// Acknowledgment returned by the backend when a message is accepted
export interface Ack {
  messageId: string
  status: string
}