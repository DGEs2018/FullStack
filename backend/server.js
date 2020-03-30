const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Our very first server response, voilà !');
});

server.listen(process.env.PORT || 3000);
