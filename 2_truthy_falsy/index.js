const truthyLabel = 'Truethy values';
console.group(truthyLabel);
if (true) { console.log('true') } else { console.log('FALSE') }
if ({}) { console.log('{}') } else { console.log('FALSE') }
if ([]) { console.log('[]') } else { console.log('FALSE') }
if (42) { console.log('42') } else { console.log('FALSE') }
if ("0") { console.log('\"0\"') } else { console.log('FALSE') }
if ("false") { console.log('false') } else { console.log('FALSE') }
if (new Date()) { console.log('new Date()') } else { console.log('FALSE') }
if (-42) { console.log('-42') } else { console.log('FALSE') }
if (12n) { console.log('12n') } else { console.log('FALSE') }
if (3.14) { console.log('3.14') } else { console.log('FALSE') }
if (-3.14) { console.log('-3.14') } else { console.log('FALSE') }
if (Infinity) { console.log('Infinity') } else { console.log('FALSE') }
if (-Infinity) { console.log('-Infinity') } else { console.log('FALSE') }
console.groupEnd(truthyLabel);


const andTruthy = '&& operator in case of truthy values';
console.group(andTruthy);
console.log({ obj: 'First truthy object' } && { obj: 'Second truthy object' });
console.groupEnd(andTruthy);


const falsyLabel = 'Falsy values';
console.group(falsyLabel);
if (false) { console.log('TRUE') } else { console.log('false') }
if (null) { console.log('TRUE') } else { console.log('null') }
if (undefined) { console.log('TRUE') } else { console.log('undefined') }
if (0) { console.log('TRUE') } else { console.log('0') }
if (-0) { console.log('TRUE') } else { console.log('-0') }
if (0n) { console.log('TRUE') } else { console.log('0n') }
if (NaN) { console.log('TRUE') } else { console.log('NaN') }
if ("") { console.log('TRUE') } else { console.log('""') }
console.groupEnd(falsyLabel);


const andFalsy = '&& operator in case of falsy values';
console.group(andFalsy);
console.log(0 && { obj: 'Second truthy object' });
console.groupEnd(andFalsy);

const bangBang = 'Bang-bang you are a boolean!';
console.group(bangBang);
const bangBangObject = { prop: 'Some object that can be undefined' };
console.log(bangBangObject);
console.log('Bang', !bangBangObject);
console.log('Bang-bang', !!bangBangObject);
console.groupEnd(bangBang);

const typeCoercion = 'Type Coercion';
console.group(typeCoercion);
const val1 = 10;
const val2 = '5';
const sum12 = val1 + val2;
console.log(sum12);
const val3 = '10';
const val4 = 5;
const sum34 = val3 + val4;
console.log(sum34);
console.groupEnd(typeCoercion);

const equalityOperator = 'Equality';
console.group(equalityOperator);
console.log('"5" === 5', "5" === 5);
console.log('"5" == 5', "5" == 5);
console.log('0 == false', 0 == false);
console.log('null == undefined', null == undefined);
console.groupEnd(equalityOperator);