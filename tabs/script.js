console.log("######");

let Day = document.querySelectorAll(".day > *");
let Hour = document.querySelectorAll(".Hours > *");
let Minutes = document.querySelectorAll(".Minutes > *");
let Seconds = document.querySelectorAll(".Seconds > *");

 //day.innerHTML ="####";
// console.log("####>>>>>",day.innerHTML);




let diff = 0;

// console.log(">>>>>",diff);





let countDown = () => {
    let currentDate = new Date().getTime()/1000;

    let futureDate = new Date("25-December-2023").getTime()/1000;


 diff = futureDate -   currentDate;

console.log(">>>>>>>>>>>",diff);

var d = Math.floor(diff / (3600*24));
var h = Math.floor(diff % (3600*24) / 3600);
var m = Math.floor(diff % (3600) / 60);
var s = Math.floor(diff % 60);

var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
console.log(dDisplay); dDisplay + hDisplay + mDisplay + sDisplay;
console.log(hDisplay);
console.log(mDisplay);
console.log(sDisplay);

Day[1].innerHTML = dDisplay;
Hour[1].innerHTML = hDisplay;
Minutes[1].innerHTML = mDisplay;
Seconds[1].innerHTML = sDisplay;

}

setInterval(countDown, 1000);
