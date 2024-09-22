import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Chat from "../Chat";
import { useEffect, useRef, useState } from "react";

function Home({ socket }: any) {
  const version = "1.0";
  const msgRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState([] as string[]);

  const submitMessage = () => {
    if (msgRef.current?.value) {
      setMessages([...messages, msgRef.current.value]);

      socket.emit("message", {
        uuid: socket.id,
        sender: "user",
        message: msgRef.current.value,
        time: new Date().toLocaleString(),
      });

      msgRef.current.value = "";
    }
  };

  useEffect(() => {
    const input = document.querySelector("input");
    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        submitMessage();
      }
    });
  }, []);

  return (
    <>
      <header>
        <a href="https://github.com/thevaldev/basic-chat-app" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <h1>
          Basic Chat App <span>v{version}</span>
        </h1>
      </header>
      <div className="content">
        <Chat socket={socket} />
        <div className="input-box">
          <input type="text" ref={msgRef} placeholder="Type a message" />
          <button>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
