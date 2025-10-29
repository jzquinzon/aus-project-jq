import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Ack, ChatRequest } from '../types/chatTypes';

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE ?? '/api' }),
    tagTypes: ['Chat'],
    endpoints: (builder) => ({
        postMessage: builder.mutation<Ack, ChatRequest>({
            query: (req) => ({
                url: 'chat/message', 
                method: 'POST',
                body: req,
            }),
        }),
    }),
});

export const { usePostMessageMutation } = chatApi;
