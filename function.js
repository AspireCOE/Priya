function multiple(x,y)
{
    console.log(x*y);
}
multiple(2,6);
/*Immediate Invoke anonymous function*/
(function ()
{
      console.log("anonymous function");
})();
/* arrow function*/
var greet=()=>{console.log("have a nice day");}
greet();
console.log(greet);
/* call method in js*/
const Game={
    name:"mad cooking",
    year:1998,
}
const Game1={
    name:"jumping",
    year:1998,
}
function display(character)
{
    console.log(`${this.name} was realeased in the year ${this.year}, which has a character ${character}`);
}
display.call(Game,'chef');
display.call(Game1,'dino');
/* apply method in js*/
display.apply(Game,['chef']);
display.apply(Game,['dino']);
/* bind method in js*/
display.bind(Game,'chef')();
var gameInfo=display.bind(Game1,'dino')
gameInfo();
display.bind(Game,'chef');
gameInfo();
/* callback function */
function add(x,y,callback)
{
    let res=x+y;
    callback(res);
}
function result(res)
{
    console.log(res);
}
add(7,9,result);
let timeOutId=setTimeout(greet,3000);
setTimeout(()=>{clearTimeout(timeOutId)},9000)