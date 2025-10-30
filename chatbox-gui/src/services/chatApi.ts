import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ChatRequest } from '../types/chatTypes';
import type { Ack } from '../types/commonTypes';

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

// export const streamApi = createApi({
//     reducerPath: 'streamApi',
//     baseQuery: fettchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE ?? '/api' }),
//     tagTypes: ['Stream'],
//     endpoints: (builder) => ({
//         getStream: builder.query<StreamResponse, StreamRequest>({

// }) NICE TO HAVE

export const { usePostMessageMutation } = chatApi;
