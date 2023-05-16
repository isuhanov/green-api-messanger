import { useCallback, useState } from 'react';

import LoginForm from './components/LoginForm/LoginForm';
import Messanger from './components/Messanger/Messanger';
import './App.css';

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))); // стекйт для текущего пользователя

    const login = useCallback((user) => { // ф-ия авторизации
        localStorage.setItem('user', JSON.stringify(user)); // добавление в локальное хранилище параметров доступа
        setUser(user);
    }, [setUser]);

    const logout = useCallback(() => { // ф-ия авторизации
        localStorage.removeItem('user'); // добавление в локальное хранилище параметров доступа
        setUser(null);
    }, [setUser]);
    
    return (
        <div className="App">
            { user ? 
                    <Messanger onLogout={logout} />
                :
                    <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
