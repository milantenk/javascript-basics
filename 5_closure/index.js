function createLoggerFunction() {
    let innerVariable = 'Hello from the inner function';
    function logVariable() {
        console.log(innerVariable);
    }
    return logVariable;
}

let myLogger = createLoggerFunction();
// myLogger();

/**--------------------------------*/

function createAdder() {
    let sum = 0;
    return function () { sum += 1; return sum; }
}

let adder = createAdder();
// console.log(adder());
// console.log(adder());
// console.log(adder());

/**--------------------------------*/

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

let adder10 = makeAdder(10);
// console.log(adder10(20));