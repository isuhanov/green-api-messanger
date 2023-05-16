import { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');
    const [error, setError] = useState('');

    function onClickLogin() {
        if (idInstance.trim().length > 0 && apiTokenInstance.trim().length > 0) {
            onLogin({idInstance, apiTokenInstance});
        } else {
            setError('Все поля должны быть заполнены');
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
            </div>
        </div>
    );
}

export default LoginForm;