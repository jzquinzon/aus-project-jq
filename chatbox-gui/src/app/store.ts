import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../features/chat/chatSlice'
import { chatApi } from '../services/chatApi'
import { listenerMiddleware } from './listenerMiddleware'
import { conversationApi } from '../services/conversationApi'


// Place to hold Reducers
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(chatApi.middleware)
      .concat(conversationApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
