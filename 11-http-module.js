
const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("Welcome to our homepage")
    }
    if(req.url=='/about')
    {
        console.log("Our history");
    }
    res.end(`
    <h1>OOPS</h1>
    `)
})

server.listen(5000)