const net = require('net');
const server = net.createServer(function (socket) { 
  socket.on('data', function (data) { 
    socket.write(data);
  });
});

server.listen({ host: 'localhost', port: 10000}, 
  function(){ 
    console.log('Start Echo server...')
  });
