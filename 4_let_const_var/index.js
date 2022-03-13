/***** var can be redeclared *****/
var blockScopeTest = 'fromGlobal';
if(true) {
    var blockScopeTest = 'blockValue';
}
// console.log(blockScopeTest);

/***** var hoisting *****/
// console.log(hoistedVar);
var hoistedVar = 'hoistedVarValue';

// console.log(hoistedLet);
let hoistedLet = 'hoistedLetValue';

/** let & const */
let myLet = 'letValue';
myLet = 'letVarValue2';
// let myLet = 'letValue4';

const myConst = 'constValue';
// myConst = 'constValue2';