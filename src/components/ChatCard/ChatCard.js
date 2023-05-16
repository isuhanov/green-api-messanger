import { useState } from 'react';
import Message from '../Message/Message';
import './ChatCard.css';
import axios from 'axios';

const ChatCard = () => {
    const [inputMessage, setInputMessage] = useState(''); // стейст для поля ввода
    const [messages, setMessages] = useState([]); // стейст для хранения сообщений

    const idInstance = '1101820349';
    const apiTokenInstance = 'da1aae0f134b4ddbaed0b4bd67b3cb313bf971bc51af43fbbc';

    function sendMessage() { // ф-ия отправки сообщения
        if (inputMessage.trim().length > 0) { // отправка, если сообщение не пустое 
            const body = {
                chatId: "79859877839@c.us",
                message: inputMessage
            }

            console.log(body);
            axios.post(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body).then(res => {
                console.log(res);
                setMessages(prevMessages => [ // добавление нового сообщения в массив
                    ...prevMessages,
                    {
                        id: res.data.idMessage,
                        type: 'outgoing',
                        text: inputMessage,
                    }
                ])
                setInputMessage('');
            }).catch(err => console.log(err));
        }
    }

    return (
        <div className="chat-card-container">
            <header className="header">
                {/* <button type="button" className="btn">
                    Создать 
                </button> */}
            </header>
            <div className="chat-card-main">
                <div className="chat-card-main__inner">
                    
                    { messages.map(message => (
                        <Message key={message.id} 
                                typeMessage={message.type}
                                text={message.text}          
                        />
                    )) }

                    {/* <Message typeMessage={"incoming"} />
                    <Message typeMessage={"outgoing"} /> */}
                </div>
            </div>
            <footer className="chat-card-footer">
                <input type="text" className="chat-input" placeholder="Введите сообщение..."
                        value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}/>
                <button onClick={sendMessage} type="button" className="btn-send">
                    <span className="material-symbols-outlined">send</span>
                </button>
            </footer>
        </div>
    );
}

export default ChatCard;