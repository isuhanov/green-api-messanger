import ChatList from '../ChatList/ChatList';
import ChatCard from '../ChatCard/ChatCard';
import './Messanger.css';
import { useState } from 'react';


const Messanger = ({ onLogout }) => {
    const [selectedChat, setSelectedChat] = useState('');

    return (
        <>
            <ChatList onLogout={onLogout} selectedChat={selectedChat} selectChat={setSelectedChat}/>
            <ChatCard chatId={selectedChat + '@c.us'}/>
        </>
    );
}

export default Messanger;