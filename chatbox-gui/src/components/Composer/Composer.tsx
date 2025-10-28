import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Send, Paperclip, Mic } from 'react-bootstrap-icons';
import { useState } from 'react';

import './Composer.css';

const Composer = () => {
    const [message, setMessage] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            console.log('Sending message:', message);
            // Add your send logic here
            setMessage('');
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
                        <Button variant="primary" type="submit" title="Send message" className="send-button">
                            <Send />
                        </Button>
                    </div>
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default Composer;
