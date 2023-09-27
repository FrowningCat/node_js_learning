// const os = require('os')
// const cluster = require('cluster')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

// if (cluster.isMaster){
// 	for (let i = 0; i < os.cpus().length - 2; i++){
// 		cluster.fork()
// 	}
// 	cluster.on('exit', (worker) => {
// 		console.log(`Воркер c pid = ${worker.process.pid} удален`)
// 		cluster.fork()
// 	})	
// } else {
// 	console.log(`Воркер c pid = ${process.pid} запущен`)

// 	setInterval(() => {
// 		console.log(`Воркер c pid = ${process.pid} работает`)
// 	}, 5000)
// }