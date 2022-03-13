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
let obj1 = {myProperty: 'Obj1 Property Value'};
let obj2 = obj1;
obj2 = obj1;
obj2.myProperty = 'Changed Property Value';
const byReference = 'byReference';
console.group(byReference);
console.log(obj1);
console.log(obj2);
console.groupEnd(byReference);
