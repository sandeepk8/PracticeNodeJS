//GLOBALS

// __dirname: path to current directory
// __filename: file name
// require: fucntion to use modules
// module: info about current module
// proces: info about env where the program is being executed



// const os=require('os')

// //info about current user
// const user=os.userInfo();
// console.log(user);

// // method returns system uptime
// console.log(os.uptime());

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS)


const _ =require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);
console.log("Hello World")