

const url = "https://v6.exchangerate-api.com/v6/3bfe3487ca8e0509f9f3f67f/latest/USD";

let btn = document.querySelector("#b");




let amount = document.querySelector("#text");

let result= document.querySelector("#result");
let amtval;
console.log(amtval);

const getdata = async ()=>{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    amtval = amount.value;
    let select = document.getElementById('to1');
    let  option = select.options[select.selectedIndex];

    let select1 = document.getElementById('from1');
    let  option1 = select1.options[select1.selectedIndex];
    let final = option.value;
    let final1 = option1.value;

    console.log(final);
    console.log(final1);

    result.innerText = (amtval * data.conversion_rates[final])/data.conversion_rates[final1];
    

}
btn.addEventListener("click", getdata);



