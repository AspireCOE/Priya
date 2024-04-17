var express=require('express');
var server=express();
server.get("/", (request, response) => {
    response.send("express server");
});
server.get("/alien", (request, response) => {
    const id=request.query.id
    response.send("welcome back alien "+id);
});
server.get("/alien/:id", (request, response) => {
    const id=request.params.id
    response.send("hello alien "+id);
});

server.listen(5000,()=>{console.log("express server is running")});
