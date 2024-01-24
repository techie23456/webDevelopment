console.log("@@@@@@@@@@@@@@@");

let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let saveBtn =  document.querySelector("button");

let AutoFill = document.querySelector(".autoFill");
let Clear = document.querySelector(".clear");

let LocalStorageFirstName = document.querySelector(".LocalFirstName") ;
let LocalStorageLastName = document.querySelector(".LocalLastName") ;

//saveBtn.innerHTML = "Save..."

// fName.value = "Avinash";
// lName.value = "Singh";

saveBtn.addEventListener("click",(e)=>{

    let userInfo = [
        {
            fName : fName.value,
            lName  : lName.value 
        }
    ];
    
    let jsonData = JSON.stringify(userInfo);
    
    localStorage.setItem("user",jsonData)


    let ls = JSON.parse(localStorage.getItem('user'));
   

    console.log(ls[0].fName);

    LocalStorageFirstName.innerHTML = `<h2>First Name : ${ls[0].fName}</h2>`
    LocalStorageLastName.innerHTML =  `<h2>Last Name : ${ls[0].lName}</h2>`



    fName.value = ls[0].fName;
    lName.value = ls[0].lName;

    

});

AutoFill.addEventListener("click",()=>{

    let ls = JSON.parse(localStorage.getItem('user'));
   
    console.log(ls[0].fName);

    LocalStorageFirstName.innerHTML = `<h2>First Name : ${ls[0].fName}</h2>`
    LocalStorageLastName.innerHTML =  `<h2>Last Name : ${ls[0].lName}</h2>`



    fName.value = ls[0].fName;
    lName.value = ls[0].lName;

});

Clear.addEventListener("click",()=>{

    fName.value = '';
    lName.value = '';

});

