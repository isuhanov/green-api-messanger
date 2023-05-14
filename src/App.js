import './App.css';
import ChatCard from './components/ChatCard/ChatCard';
import ChatList from './components/ChatList/ChatList';

function App() {
    return (
        <div className="App">
            <div className="chats-list-container">
                <header className="header">
                    <button type="button" className="btn">
                        Создать 
                    </button>
                </header>
                <ChatList />
            </div>
            <ChatCard />
        </div>
    );
}

export default App;
