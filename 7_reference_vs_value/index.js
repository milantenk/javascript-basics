/* by value, primitive types */
let val1 = 1;
let val2 = val1;
val2 = 5;
const byValue = 'byValue';
console.group(byValue);
console.log('val1', val1);
console.log('val2', val2);
console.groupEnd(byValue);

/* by reference */
let obj1 = { myProperty: 'Obj1 Property Value' };
let obj2 = obj1;
obj2.myProperty = 'Changed Property Value';
const byReference = 'byReference';
console.group(byReference);
console.log(obj1);
console.log(obj2);
console.groupEnd(byReference);

/* functions */
const functionsPrimitiveVsReference = 'functionsPrimitiveVsReference';
console.group(functionsPrimitiveVsReference);
const primitiveFunctionParam = 2;
(function (param1) {
    param1 = 100;
})(primitiveFunctionParam);
console.log('primitiveFunctionParam', primitiveFunctionParam);

const objectFunctionParam = { test: 'outsideValue' };
(function (param1) {
    param1.test = 'insideValue';
})(objectFunctionParam);
console.log('objectFunctionParam', objectFunctionParam);
console.groupEnd(functionsPrimitiveVsReference);



