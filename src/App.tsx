import "./style/app.scss";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });
  }, []);

  return (
    <>
      {connected ? (
        <div className="app">
          <div className="wrap">
            <Home socket={socket} />
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default App;
