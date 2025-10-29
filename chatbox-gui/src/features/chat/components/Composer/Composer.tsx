import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Send, Paperclip } from 'react-bootstrap-icons';
import { useState } from 'react';

import './Composer.css';
import { useAppDispatch } from '../../../../app/hooks';
import { addMessage } from '../../chatSlice';
import { usePostMessageMutation } from '../../../../services/chatApi';

const Composer = () => {
    const [message, setMessage] = useState('');
    const dispatch = useAppDispatch();
    const [postMessage, { isLoading, isError }] = usePostMessageMutation();

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            console.log('Sending message:', message);
            setMessage('');
            dispatch(addMessage(message));
            try {
                const ack = await postMessage({
                    sessionId: 'default-session',
                    content: message,
                }).unwrap();

                console.log(ack);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <Form onSubmit={handleSend}>
            <Form.Group className="mb-3" controlId="messageComposer">
                <Form.Label>Hello NAME</Form.Label>
                <InputGroup className="composer-input-group">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Ask LISA..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ resize: 'none' }}
                        className='chatbox'
                    />
                    <div className='action-buttons-container'>
                        <Button variant="outline-secondary" title="Attach file" className="attach-button">
                            <Paperclip />
                        </Button>
                        {/* <Button variant="outline-secondary" title="Voice message">
                            <Mic />
                        </Button> */}
                        {isLoading ? (
                            <Button variant="primary" type="submit" title="Send message" className="send-button" disabled>
                                <Send />
                            </Button>
                        ) : (
                            <Button variant="primary" type="submit" title="Send message" className="send-button">
                                <Send />
                            </Button>
                        )}
                    </div>
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default Composer;
