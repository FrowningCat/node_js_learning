// const http = require('http')
// const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		'Content-type': 'text/html;'
// 	})
// 	res.end('<h1>Hello word</h1>')
// })

// server.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// const server = http.createServer((req, res) => {
// 	res.writeHead(200,	{
// 		'Content-type': 'application/json;'
// 	})
// 	if(req.url === '/users'){
// 		return res.end(JSON.stringify([
// 			{id: 1, name: 'fd f'}
// 		]))
// 	}
// 	if(req.url === '/post'){
// 		return res.end('POST')
// 	}
// })