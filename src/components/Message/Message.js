import './Message.css';

const Message = ({ typeMessage, text }) => {
    return (
        <div className={`message ${typeMessage}`}>
            <p className="message-text">
                {text}
            </p>
        </div>
    );
}

export default Message;