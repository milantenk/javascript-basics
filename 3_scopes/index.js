//************ global scope *************/
let globalWithLet = 'global with let';

function functionForGlobal() {
    console.log(globalWithLet);
}
// functionForGlobal();

/* IIFE alternative */
// (function functionForGlobal() {
//     console.log(globalWithLet);
// })();

/* automatically global */
surprisinglyGlobal();
// console.log(variableWithoutDeclaration);
function surprisinglyGlobal() {
    variableWithoutDeclaration = 'variableWithoutDeclaration';
}

//************ local scope ************/
function functionForLocal() {
    let localWithLet = 'local with let';
    var localWithVar = 'local with var';
}
// console.log('localWithLet', localWithLet);
// console.log('localWithVar', localWithVar);


/************ block scope ************/
{
    const myBlockVarWithLet = 6;
}
// console.log(myBlockVarWithLet);

{
    var myBlockVarWithVar = 7;
}
// console.log(myBlockVarWithVar);

function loop() {
    for(var i=0; i < 5; i++) {
        console.log(i);
    }
    console.log('end: ', i);
}
loop();