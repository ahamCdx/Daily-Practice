// Reverse a string with two pointer.

let str = 'hello'

let i=0;
let j=str.length-1;

while(i<j){
    [str[i] , str[j]] = [str[j], str[i]]
    i++
    j--
}
console.log(str)