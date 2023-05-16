import './Message.css';

const Message = ({ typeMessage }) => {
    return (
        <div className={`message ${typeMessage}`}>
            <p className="message-text">
                test text
            </p>
        </div>
    );
}

export default Message;