import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type { Conversation } from '../types/conversationTypes';
import type { Ack } from '../types/commonTypes';

export const conversationApi = createApi({
    reducerPath: 'conversationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE ?? '/api',
    }),
    tagTypes:['Conversation'],
    endpoints: (builder) => ({
        postConversation: builder.mutation<Ack, Conversation>({
            query: (req) => ({
                url: 'conversation/create',
                method: 'POST',
                body: req,
            }),
        }),

        getConversationById: builder.query<Conversation, string>({
            query: (id) => `conversation/${id}`,
        }),

        getAllConversations: builder.query<Conversation[], void>({
            query: () => 'conversation/all',
        }),
    }),
});

export const { usePostConversationMutation, useGetConversationByIdQuery, useGetAllConversationsQuery } = conversationApi;