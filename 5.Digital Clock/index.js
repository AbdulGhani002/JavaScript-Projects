let a;
let date;
let time;


setInterval(() => {
    
    a = new Date();
    date = a.getFullYear(), a.getMonth(), a.getDate();
    date = a.getDay() + "/"+ a.getMonth()+ "/" + a.getFullYear();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("time").innerHTML = time + "<br> on " + date;
}, 1000);
