
let Hour = document.querySelectorAll(".Hours > *");
let Minutes = document.querySelectorAll(".Minutes > *");
let Seconds = document.querySelectorAll(".Seconds > *");

let btn = document.querySelector(".startBtn");

let t = setInterval(Time,1000);
 
btn.addEventListener('click',()=>{

   if (btn.innerHTML == "<h2>Stop</h2>")
   {
       btn.innerHTML = "<h2>Start</h2>";
   
       clearInterval(t);
   
        console.log(btn.innerHTML);

        console.log("=========")
   
   }
   else if (btn.innerHTML == "<h2>Start</h2>")  {
   
       btn.innerHTML = "<h2>Stop</h2>";
       console.log("#######")

       t = setInterval(Time,1000)
   
   }
   
   });


function Time()
{
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log(`hours : ${hours} : Minures : ${minutes} : Seconds ${seconds}`);

Hour[1].innerHTML = hours;
Minutes[1].innerHTML = minutes;
Seconds[1].innerHTML = seconds;
}




