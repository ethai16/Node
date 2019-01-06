//original
function add(x, y) {
    let result = x + y;
    return result;
}
//callback
function add (x,y,callback){
    setTimeout(function () {
    let result = x + y;
    callback(result)
    }, 1000)
}
add(1,2,(result) => console.log(result))

//original
function subtract(x, y) {
    return x - y;
}
//callback
function subtract(x,y,callback){
    setTimeout(function(){
    let result = x - y
    callback(result)
    },1000)
}
subtract(3,1,(result)=>console.log(result))


//original
function greeting(person) {
    return 'Hola, ' + person + '!';
}
//callback
function greeting(person,callback){
    setTimeout(function(){
    callback(person)
    },1000)
}
greeting('Erick', (person) => console.log(`Hola, ${person}!`))


//original
var x = [1,2,3,4,5]
// function product(numbers) {
//     return numbers.reduce(function (a, b) {
//         return a * b;
//     }, 1);
// }
//callback
function product(numbers,callback){
    setTimeout(function(){
    callback(numbers)
    },1000)
}

product(x,(numbers) => console.log(numbers.reduce(function(a,b){
        return a * b
    },1)
))

