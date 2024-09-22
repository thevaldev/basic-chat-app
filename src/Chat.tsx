import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Chat({ socket }: any) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on("receiveMessage", (data: any) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  return (
    <div className="chat">
      {messages.map((message: any, i: any) => {
        let sender = message.uuid == socket.id ? " sender" : "";
        return (
          <div className={"chat-message" + sender} key={i}>
            <div className="avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="message">
              <p>{message.message}</p>
              <span>
                {message.sender} <span className="date">{message.time}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
