import express from 'express';
const app = express();
import * as http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
const io = new Server(http.createServer(app), {
    cors: {
        origin: '*',
    }
});
app.use(cors());
const server = http.createServer(app);