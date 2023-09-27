const path = require('path')

console.log("Склеить участки пути", path.join(__dirname, '..', '..'))
const fullpath = ('Получить абсолютный путь', path.resolve('first', 'second', 'third.js'))
console.log('Парсинг пути', path.parse(fullpath))