const { log } = require('console')
const{readFileSync, writeFileSync}=require('fs')


const first=readFileSync('./subFolder/first.txt','utf-8')
const second= readFileSync('./subFolder/second.txt','utf-8')

console.log(first,second)
writeFileSync('./subFolder/result.txt',`RES ${first},${second}`)

const th=readFileSync('./subFolder/result.txt','utf-8')
console.log(th);