const express = require('express');

const PORT = 3001;

const app = express();

app.get('/hello', (request, response) => {
	const from = request.ip.split(':').reverse()[0];
	console.log(`[REQUEST] FROM: ${from} TO: ${request.path} MESSAGE: ${request.query.message}`);
    response.send(`Hello, world!`);
});

app.listen(PORT, () => {
    console.log(`App has started on ${PORT} PORT`);
});

