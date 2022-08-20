window.addEventListener("load", main())

function main(){
    
}

function gen(){
    var specialChecked = document.getElementsByClassName("special-c")[0].checked,
        numbersChecked = document.getElementsByClassName("num")[0].checked,
        uppercaseChecked = document.getElementsByClassName("upper-c")[0].checked,
        lowercaseChecked = document.getElementsByClassName("lower-c")[0].checked;
        
    console.log(specialChecked, numbersChecked, uppercaseChecked, lowercaseChecked);

    var lenght = document.getElementById("amount").value,
        pass = "",
        lowercase = "abcdefghijklmnoprstuwxyzv",
        uppercase = lowercase.toUpperCase(),
        numbers = "0123456789",
        special = ",.<>/;':{}[]~+()*&^%$#@!=+-_`";

    console.log(lenght);
}