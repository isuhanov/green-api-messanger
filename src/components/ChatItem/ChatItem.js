import { memo } from 'react';

import './ChatItem.css';

const ChatItem = memo(({ phone, isSelected, onSelect }) => {
    return (
        <div onClick={() => onSelect(phone)} className={`chat-item ${isSelected && 'selected'}`}>
            <p className="chat-name">
                { phone.replace(/^7/, '+7') }
            </p>
        </div>
    );
});

export default ChatItem;