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
