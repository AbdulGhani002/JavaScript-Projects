// document.getElementById("count-el").innerText = 5;

// let count = 0;
// console.log(count);
// function increment() {
//     console.log("The button was clicked.")
// }
//  Initialize the count as 0

// Listen for click on  Increments button

// Increment the count variable as the button is pressed

// Change the count-el in HTML to reflect the new count

let count = 0;
// camelCase
let countEl = document.getElementById("count-el");
function increment(){
    count += 1;
// Display the count
    console.log(count);
//    countEl.innerText = count;
    countEl.textContent = count;
}
// console.log(countEl);




// Create a function , save() which logs out the count 
// when the button is called


let saveEl = document.getElementById("save-el");
function save(){
    let countStr = count + " - ";
    // ancient way saveEl.innerText += countStr;
    saveEl.textContent += countStr; 
    countEl.textContent = 0;
    count = 0;
}
