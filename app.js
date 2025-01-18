
let dropdown = document.querySelectorAll(".dropdown");
for(let select of dropdown){
    for(code in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = code;
        newoption.value = code;
        select.append(newoption);

    }
}