let a;
let date;
let time;


setInterval(() => {
    
    a = new Date();
    date = a.getDay() + "/"+ a.getMonth()+ "/" + a.getFullYear();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    /*
    document.getElementById("time").textContent = time + " on ";
    document.getElementById("time").textContent += date;*/
    document.getElementById("time").textContent = time + " on " + date;
}, 1000);
