import { memo } from 'react';

import './ChatItem.css';

// компонент элемента в списке чатов
const ChatItem = memo(({ phone, isSelected, onSelect }) => {
    return (
        <div onClick={() => onSelect(phone)} className={`chat-item ${isSelected && 'selected'}`}>
            <p className="chat-name">
                { phone }
            </p>
        </div>
    );
});

export default ChatItem;