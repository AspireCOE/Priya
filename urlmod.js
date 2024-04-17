var url=require('url')
var http=require('http')
var fs=require('fs')

var server=http.createServer((req,res)=>{
    var urlObj=url.parse(req.url,true)
    const filename="."+urlObj.pathname
    fs.readFile(filename,function(err,data){
        if(err)
        {
            return res.end("404, not found")
        }
        res.write(data)
    })
})
server.listen(8080,()=>{console.log("server is running")})