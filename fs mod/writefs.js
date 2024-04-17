var fs=require('fs')
/*fs.writeFile('hello.js','console.log("hello world")',function(err)
{
    console.log('file created')
})*/
fs.appendFile('calc.js','console.log("done")',function(err)
{
    console.log('file append')
})
fs.unlink('hello.js',function(err){
    console.log('file deleted')
})