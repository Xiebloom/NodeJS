let nowDate = new Date()
let time = ''
time += nowDate.getFullYear() + '-'
time += nowDate.getMonth() + 1 + '-'
time += nowDate.getDate() + ' '
time += nowDate.getHours() + ':'
time += nowDate.getMinutes()

console.log(time);