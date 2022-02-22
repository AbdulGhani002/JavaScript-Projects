let numEl = document.getElementById("num-el");
let metreLength = document.getElementById("length-metre");
let metre = numEl.textContent * 1;
let feetLength = document.getElementById("length-feet");
let feet  = numEl.textContent * 3.28084;
let inchLength = document.getElementById("length-inch-el");
let inches = numEl.textContent * 39.3701;
let dmVolume = document.getElementById("volume-dm");
let dm = numEl.textContent * 1;
let cmVolume = document.getElementById("volume-cm");
let cm = numEl.textContent * 1000;


function clickMe(){
    metreLength.textContent = "Metre : " + metre;    
    feetLength.textContent = "Feet : " + feet;
    inchLength.textContent = "Inch : " + inches;
    dmVolume.textContent = "DeciMetreCube : " + dm;
    cmVolume.textContent = "CentiMetreCube : " + cm;
};