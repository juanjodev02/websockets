import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
	console.log('New user connection: ' + socket.id);

	io.on('client-message', (payload) => {
		console.log(payload);
	});

	io.on('disconnect', () => {
		console.log('User dissconnected: ' + socket.id);
	});
});

server.listen(3000, () => {
	console.log('Listening on port 3000');
})