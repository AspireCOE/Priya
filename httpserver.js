var http=require('http');
var server=http.createServer((request,response)=>{
    if(request.url=="/")
        response.write("<h1>welcome to demo of httpserver</h1>");
    else if(request.url=="/home")
        response.write("<h1>welcome to home page</h1>");

})
server.listen(3000,()=>{console.log("http server is running")});