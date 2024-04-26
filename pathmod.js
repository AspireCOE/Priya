var path=require('path')
var os=require('os')
var filename={dir:"\\dir1\\dir2\\",base:"text.txt"}

var exactpath=path.format(filename)
console.log(exactpath)

var xpath=path.join("dummy","login","basefile.txt")
console.log(xpath)

console.log(os.platform());
console.log(os.arch());
console.log(os.release());