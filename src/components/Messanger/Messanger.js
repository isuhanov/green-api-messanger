import ChatList from '../ChatList/ChatList';
import ChatCard from '../ChatCard/ChatCard';
import './Messanger.css';
import { useState } from 'react';


const Messanger = () => {
    const [selectedChat, setSelectedChat] = useState('');

    return (
        <>
            <ChatList selectedChat={selectedChat} selectChat={setSelectedChat}/>
            <ChatCard chatId={selectedChat + '@c.us'}/>
        </>
    );
}

export default Messanger;