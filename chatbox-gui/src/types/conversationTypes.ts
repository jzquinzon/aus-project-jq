
export interface Conversation {
    id: number;  
    conversationId: string;  // UUID serializes to string
    createdAt: string;  // OffsetDateTime serializes to ISO 8601 string
    updatedAt: string;  // OffsetDateTime serializes to ISO 8601 string
}
