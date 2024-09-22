import express from 'express';
const app = express();
import * as http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());

io.on('connection', (socket) => {
    console.log('user connected: ', socket.id);

    socket.on('message', (data) => {
        console.log(data.message + ' ' + socket.id);
        
        io.emit('receiveMessage', data);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected: ', socket.id);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});