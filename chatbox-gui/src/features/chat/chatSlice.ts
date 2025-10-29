import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { Message, Role } from '../../types/chatTypes'


export interface ChatState {
  messages: Message[]
}

const initialState: ChatState = {
  messages: [],
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: {
      // builds the payload in reducer, instead of the component
      prepare: (text: string, role: Role = 'user') => ({ // part of redux toolkit
        payload: { id: nanoid(), text, role, timestamp: Date.now() } as Message,
      }),
      reducer: (state, action: PayloadAction<Message>) => {
        state.messages.push(action.payload)
      },
    },

    //{id: string}
    removeMessage: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter((m) => m.id !== action.payload)
    },
  },
})

export const { addMessage, removeMessage } = chatSlice.actions
export default chatSlice.reducer
