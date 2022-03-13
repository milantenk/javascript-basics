/* finding and modifying elements */
let paragraph = document.getElementById('myParagraph');
console.log(paragraph);
paragraph.innerHTML = 'Hello from JS';

let withSameClass = document.getElementsByClassName('sameParagraphClass');
console.log(withSameClass);

function attributeEventHandler() {
    console.log('callback of attributeEventHandler');
}

/* https://www.w3schools.com/jsref/dom_obj_event.asp */
document.getElementById('eventButton').addEventListener('click', () => { console.log('callback from eventButton') });