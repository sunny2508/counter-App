let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let count = document.querySelector(".count");
let cspan = document.querySelector("#c-span");
let ispan = document.querySelector("#i-span");
let dspan = document.querySelector("#d-span");

let counter = 0;

function updatecounter() {
    ispan.innerHTML = counter;
    cspan.innerHTML = counter;
    dspan.innerHTML = counter;
}

increase.addEventListener("click",(e)=>{
    counter = counter + 1;

    if(counter === 20)
    {
        increase.disabled = true;
    }
    if(counter > 0)
    {
        decrease.disabled = false;
    }
    updatecounter();

    
    

});

decrease.addEventListener("click",(e)=>{
    if(counter >0)
    {
    counter = counter - 1;
    increase.disabled = false;
    }

    if(counter === 0)
    {
        decrease.disabled = true;
    }


    
    updatecounter();
});