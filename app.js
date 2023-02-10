const net = require('net');

const server = net.createServer();

const TCP_PORT = 8080;
server.listen(TCP_PORT, '0.0.0.0', () => {
    console.log(`TCP Listening on ${TCP_PORT}`);
});

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        socket.write(data);
    });
});
