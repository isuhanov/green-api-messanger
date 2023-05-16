import { memo } from 'react';

import './Message.css';

// компонент сообщения
const Message = memo(({ typeMessage, text }) => {
    return (
        <div className={`message ${typeMessage}`}>
            <p className="message-text">
                {text}
            </p>
        </div>
    );
});

export default Message;