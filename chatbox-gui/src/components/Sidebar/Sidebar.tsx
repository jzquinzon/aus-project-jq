import { useAppDispatch } from "../../app/hooks";
import { useGetAllConversationsQuery } from "../../services/conversationApi";
import type { Conversation } from "../../types/conversationTypes";
import { useState, useEffect } from "react";

const Sidebar = () => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const dispatch = useAppDispatch();
    const { data, isLoading } = useGetAllConversationsQuery(); //fires on mount because rtk builder.query

    useEffect(() => { //useEffect to set local state
        if (data) {
            setConversations(data);
        }
    }, [data]);

    return(
        <div className="sidebar">
            <h2>Conversations</h2>
            {isLoading && <p>Loading...</p>}
            <ul>
                {conversations.map((conv) => (
                    <li key={conv.id}>{conv.title}</li>
                ))}
            </ul>
        </div>
    )

};

export default Sidebar;