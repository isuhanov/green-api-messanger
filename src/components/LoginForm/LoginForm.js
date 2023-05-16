import { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');
    const [error, setError] = useState('');

    function onClickLogin() {
        if (idInstance.trim().length > 0 && apiTokenInstance.trim().length > 0) {;
            axios.post(`https://api.green-api.com/waInstance${idInstance}/SetSettings/${apiTokenInstance}`, {
                webhookUrl: "",
                outgoingWebhook: "yes",
                stateWebhook: "yes",
                incomingWebhook: "yes"
            }).then(res => {
                if (res.data.saveSettings) onLogin({idInstance, apiTokenInstance});
            }).catch(err => {
                setError('Ошибка, проверьте правильность вносимых данный');
            });
        } else {
            setError('Ошибка, все поля должны быть заполнены');
        }
    }

    return (
        <div className="login-form-container">
            <div className="login-form">
                <h3 className="form-title title">
                    Авторизация
                </h3>
                <div className="filed-block">
                    <input className="input" type="text" placeholder="idInstance"
                            value={idInstance} onChange={(e) => setIdInstance(e.target.value)}/>
                </div>
                <div className="filed-block">
                    <input className="input" type="text" placeholder="apiTokenInstance"
                            value={apiTokenInstance} onChange={(e) => setApiTokenInstance(e.target.value)}/>
                </div>
                { error &&  
                    <p className="error">{ error }</p>
                }
                <button onClick={onClickLogin} className="btn form-btn">
                    Войти
                </button>
                <p className="explanation">
                    ВНИМАНИЕ, для работы сервиса требуется оставить пустым параметр webhookUrl. 
                    Сделайте это вручную, либо настройка произайдет автоматически при автооризации
                </p>
            </div>
        </div>
    );
}

export default LoginForm;