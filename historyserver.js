const net = require('net');
let history = '';
const server = net.createServer(socket => socket.on('data', data => { 
  history += data + '\n';
  socket.write(history);
}));
server.listen({ host: 'localhost', port: 10000}, () => console.log('Start History server...'));
