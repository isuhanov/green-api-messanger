import { useEffect, useState } from 'react';
import axios from 'axios';

import Message from '../Message/Message';
import './ChatCard.css';

const ChatCard = () => {
    const [inputMessage, setInputMessage] = useState(''); // стейст для поля ввода
    const [messages, setMessages] = useState([]); // стейст для хранения сообщений

    // получение парметров доступа из локального хранилища
    const idInstance = JSON.parse(localStorage.getItem('user'))?.idInstance; 
    const apiTokenInstance = JSON.parse(localStorage.getItem('user'))?.apiTokenInstance;

    const chatId = "79852701795@c.us";
    

    useEffect(() => { // эффект рекурсивного вызов функции для постоянного мониторинга входящий уведомлений (по завершению запрос повторяется снова)
        const getMessage = async () => { // функция получения сообщений
            axios.get(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`).then(({ data }) => {
                if (data && data.body.typeWebhook === 'incomingMessageReceived'  // если сообщение "входящее", "текстовое" и приходит из текущего чата, то добавить
                        && data.body.messageData.typeMessage === 'textMessage' 
                        && data.body.senderData.chatId === chatId
                    ) {
                    // удаление сообщения из очереди 
                    axios.delete(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${data.receiptId}`).then(res => { 
                        if (res.data.result) { // если результат положительный, то добавить сообщение в массив чата
                            setMessages(prevMessages => [ // добавление нового сообщения в массив
                                ...prevMessages,
                                {
                                    id: data.body.idMessage,
                                    type: 'incoming',
                                    text: data.body.messageData.textMessageData.textMessage,
                                }
                            ]);
                            getMessage(); // рекурсивный вызов функции
                        }
                    }).catch(err => console.log(err));
                } else {
                    getMessage(); // рекурсивный вызов функции
                }
            }).catch(err => console.log(err));     
        }
        getMessage();     
    }, [setMessages]);

    
    function sendMessage() { // ф-ия отправки сообщения
        if (inputMessage.trim().length > 0) { // отправка, если сообщение не пустое 
            const body = {
                chatId,
                message: inputMessage
            }

            console.log(body);
            axios.post(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body).then(res => {
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
                </div>
            </div>
            <footer className="chat-card-footer">
                <input type="text" className="input chat-input" placeholder="Введите сообщение..."
                        value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}/>
                <button onClick={sendMessage} type="button" className="btn-send">
                    <span className="material-symbols-outlined">send</span>
                </button>
            </footer>
        </div>
    );
}

export default ChatCard;