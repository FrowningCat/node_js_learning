// const fs = require('fs')
// const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'di2', 'dir3'), {
// 	recursive: true
// })

// console.log('start')
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
// 	if(err) {
// 		console.log(err)
// 		return;
// 	}
// 	console.log('Папка создана')
// })
// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
// 	if(err) {
// 		throw err;
// 	}
// })

// fs.writeFile(path.resolve(__dirname, 'dir.txt'), '5 rerw r 5', (err) => {
// 	if(err) {
//  		throw err;
//  	}
// 	console.log('Файл записан')
// })

// fs.writeFile(path.resolve(__dirname, 'dir.txt'), '5 rerw r 5', (err) => {
// 	if(err) {
//  		throw err;
//  	}
// 	console.log('Файл записан')
// })

// const writeFileAsync = async (path, deta) => {
// 	return new Promise((resolve, rejects) => 
// 	fs.writeFile(path, deta, (err) => {
// 		if (err) {
// 			return rejects(err.message)
// 		}
// 		resolve()
// 	}))
// }

// const appendFileAsync = async (path, deta) => {
// 	return new Promise((resolve, rejects) => 
// 	fs.appendFile(path, deta, (err) => {
// 		if (err) {
// 			return rejects(err.message)
// 		}
// 		resolve()
// 	}))
// }

// const readFileAsync = async (path) => {
// 	return new Promise((resolve, rejects) => 
// 	fs.readFile(path, {encoding: 'utf-8'}, (err, date) => {
// 		if (err) {
// 			return rejects(err.message)
// 		}
// 		resolve(date)
// 	}))
// }

// writeFileAsync (path.resolve(__dirname, 'dir.txt'), 'date')
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'dir.txt'), '123'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'dir.txt'), '456'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'dir.txt'), '789'))
// 	.then(() => readFileAsync(path.resolve(__dirname, 'dir.txt')))
// 	.then(date => console.log(date))
// 	.catch(err => console.log('err'))

// const removeFileAsync = async (path) => {
// 	return new Promise((resolve, rejects) => 
// 	fs.rm(path, (err) => {
// 		if (err) {
// 			return rejects(err.message)
// 		}
// 		resolve()
// 	}))
// }

// removeFileAsync (path.resolve(__dirname, 'dir.txt'))
// 	.then(() => console.log('файл удален'))

// const text = '1 2 3 4 5 6 trtr';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
// 	.then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
// 	.then(date => date.split(' ').length)
// 	.then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Колличество слов ${count}`))
// 	.then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))