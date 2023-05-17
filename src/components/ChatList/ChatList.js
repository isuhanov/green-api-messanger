import { memo, useState } from 'react';
import ChatItem from '../ChatItem/ChatItem';
import './ChatList.css';
import axios from 'axios';

// компонент списка чатов
const ChatList = memo(({ selectedChat, selectChat, onLogout }) => {
    const [chats, setChats] = useState(JSON.parse(localStorage.getItem('chats')) || []); // стейт для массива чатов
    const [inputPhone, setInputPhone] = useState(''); // стейт для поля ввода сообщений 
    const [error, setError] = useState(''); // стейт для ошибок

    // получение параметров доступа из локального хранилища
    const idInstance = JSON.parse(localStorage.getItem('user'))?.idInstance; 
    const apiTokenInstance = JSON.parse(localStorage.getItem('user'))?.apiTokenInstance;

    function createChat() { // ф-ия создания чата
        let phone = inputPhone.trim().toLowerCase();

        if (phone.length > 0) {
            phone = phone.replace(/\D/g, ''); // удаление всех не числовых символов

            if (phone !== '') {
                phone = phone.replace(/^[+]/, '').replace(/^8/, '7');
                
                // проверка наличия аккаунта WhatsApp
                axios.post(`https://api.green-api.com/waInstance${idInstance}/CheckWhatsapp/${apiTokenInstance}`, {
                    phoneNumber: phone
                })
                .then(({ data }) => {
                    if (data.existsWhatsapp) { // если аккаунт есть и такого номера нет в списке - создание чата
                        if (chats.find(chat => chat === phone)) setError('Чат с таким номером уже есть в списке чатов');
                        else {
                            setChats(prevChats => [ // сохранение чата
                                ...prevChats,
                                phone
                            ])
                            // очистка полей
                            setInputPhone('');
                            setError('');
                        }
                    } else setError('Аккаунт номера не найден, проверьте правильность написания');
                })
                .catch(err => {
                    if (err.response.status === 400) setError('Проверьте правильность написания номера');
                });

            } else setError('Проверьте правильность написания номера');

        } else if (phone.length === 0 && error.trim().length > 0) setError('');
    }

    return (
        <div className="chats-list-container">
                <header className="header">
                    <button onClick={onLogout} type="button" className="btn">
                        Выход 
                    </button>
                    <input value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} className="input" placeholder="+7xxxxxxxxxx"/>
                    <button onClick={createChat} type="button" className="btn">
                        Создать 
                    </button>
                </header>
                <div className="chat-list">
                    <div className="chat-list__inner">
                    { chats.length > 0 ?
                        chats.map(chat => <ChatItem key={chat} onSelect={selectChat} phone={chat} isSelected={chat === selectedChat}/>)
                      :
                        <p className="explanation">Чтобы создать чат - внесите номер телефона абонента и нажмите на кнопку "Cоздать"</p>  
                    }
                    { error &&  
                        <p className="error">{ error }</p>
                    }
                    </div>
                </div>
            </div>
    );
});

export default ChatList;