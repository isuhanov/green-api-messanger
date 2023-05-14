import './ChatCard.css';

const ChatCard = () => {
    return (
        <div className="chat-card-container">
            <header className="header">
                {/* <button type="button" className="btn">
                    Создать 
                </button> */}
            </header>
            <div className="chat-card-main">

            </div>
            <footer className="chat-card-footer">
                <input type="text" className="chat-input" placeholder="Введите сообщение..."/>
            </footer>
        </div>
    );
}

export default ChatCard;