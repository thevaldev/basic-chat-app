import { BrowserRouter as Router } from "react-router-dom";
import "./style/app.scss";
import Chat from "./Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const version = "1.0";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="wrap">
          <header>
            <a
              href="https://github.com/thevaldev/basic-chat-app"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <h1>
              Basic Chat App <span>v{version}</span>
            </h1>
          </header>
          <div className="content">
            <Chat />
            <div className="input-box">
              <input type="text" placeholder="Type a message" />
              <button>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
