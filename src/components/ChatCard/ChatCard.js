import Message from '../Message/Message';
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
                <div className="chat-card-main__inner">
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"outgoing"} />
                    <Message typeMessage={"outgoing"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"outgoing"} />
                    <Message typeMessage={"outgoing"} />
                    <Message typeMessage={"outgoing"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"incoming"} />
                    <Message typeMessage={"outgoing"} />
                </div>
            </div>
            <footer className="chat-card-footer">
                <input type="text" className="chat-input" placeholder="Введите сообщение..."/>
                <button type="button" className="btn-send">
                    <span class="material-symbols-outlined">send</span>
                </button>
            </footer>
        </div>
    );
}

export default ChatCard;