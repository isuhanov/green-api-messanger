import ChatList from '../ChatList/ChatList';
import ChatCard from '../ChatCard/ChatCard';
import './Messanger.css';


const Messanger = () => {
    return (
        <>
            <div className="chats-list-container">
                <header className="header">
                    <button type="button" className="btn">
                        Создать 
                    </button>
                </header>
                <ChatList  />
            </div>
            <ChatCard />
        </>
    );
}

export default Messanger;