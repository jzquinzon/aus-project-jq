import type { Message } from "../../../types/chatTypes";


const MessageBubble = ({message}: {message: Message}) => {
    return (<div>{message.text}</div>);
}

export default MessageBubble;