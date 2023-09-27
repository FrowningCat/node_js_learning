// const fs = require('fs')
// const path = require('path')
// const http = require('http')

// // fs.readFile(path.resolve(__dirname, 'lorem.txt'), (err, data) => {
// // 	if (err) {
// // 		throw err;
// // 	}
// // 	console.log(data)
// // })

// const stream =fs.createReadStream(path.resolve(__dirname, 'lorem.txt'))
// stream.on('data', (chunk) => {
// 	console.log(chunk)
// })

// stream.on('end', () => {
// 	console.log('Закончили читать')
// })
// stream.on('open', () => {
// 	console.log('Начали читать')
// })
// stream.on('error', (e) => {
// 	console.log(e)
// })

// const writableSream = fs.createWriteStream(path.resolve(__dirname, 'lorem2.txt'))
// for (let i = 0; i < 20; i++){
// 	writableSream.write(i + '\n');
// }
// writableSream.end()
// writableSream.close()
// writableSream.destroy()
// writableSream.on('error')

// http.createServer((req, res) => {
// 	//req - readable stream
// 	//res - writable stream
// })