
const path= require('path')

console.log(path.join('./NodeExpress','subfolder','textfile.txt'))

const absolute=path.resolve(__dirname,'NodeExpress','subfolder','textfile.txt')