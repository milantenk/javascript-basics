const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// We call a function of an undefined variable -> error on console
// but the above code part is already rendered 
let anUndefinedVariable;
anUndefinedVariable.whatEverFunction();
