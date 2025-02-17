import express from "express";
const app = express();
import * as http from "http";
import cors from "cors";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());

io.on("connection", (socket) => {
  io.emit("receiveMessage", { message: "New user connected" });
  socket.on("message", (data) => {
    io.emit("receiveMessage", data);
  });
  socket.on("disconnect", () => {
    io.emit("receiveMessage", { message: "user disconnected" });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
