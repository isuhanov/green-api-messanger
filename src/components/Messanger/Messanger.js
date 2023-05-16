import ChatList from '../ChatList/ChatList';
import ChatCard from '../ChatCard/ChatCard';
import './Messanger.css';
import { useState } from 'react';

// компонент контейнер при переходе в мессенджер
const Messanger = ({ onLogout }) => {
    const [selectedChat, setSelectedChat] = useState(''); // стейт для выбранного чата

    return (
        <>
            <ChatList onLogout={onLogout} selectedChat={selectedChat} selectChat={setSelectedChat}/>
            <ChatCard chatId={selectedChat + '@c.us'}/>
        </>
    );
}

export default Messanger;