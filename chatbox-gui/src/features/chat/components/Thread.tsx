import { useAppSelector } from "../../../app/hooks";
import Composer from "./Composer/Composer";
import MessageBubble from "./MessageBubble";

const Thread = () => {
        const messages = useAppSelector((state) => state.chat.messages);
        return (
            <div>
                {messages.map((msg,index) => {
                    return <MessageBubble key={index} message={msg} />
                })}
                <Composer />
            </div>
    );
}

export default Thread;
