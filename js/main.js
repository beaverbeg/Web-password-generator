function errpop(ye, r){
    var res = document.getElementById("result");
    var resdiv = document.getElementById("result-div")
    if(ye==true){
        res.style.color = "red";
        resdiv.style.borderBottom = "2px solid red";
        res.innerHTML = `${r}`;
    }
    else if(ye==false){
        resdiv.style.borderBottom = "2px solid green";
        res.style.fontSize = "30px";
        res.style.color = "black";
    }
}
function copy(){
    var result = document.getElementById("result").innerHTML;
    navigator.clipboard.writeText(result);
}
function gen(){
    var specialChecked = document.getElementsByClassName("special-c")[0].checked,
        numbersChecked = document.getElementsByClassName("num")[0].checked,
        uppercaseChecked = document.getElementsByClassName("upper-c")[0].checked,
        lowercaseChecked = document.getElementsByClassName("lower-c")[0].checked,
        ch = 0;
        
    console.log(specialChecked, numbersChecked, uppercaseChecked, lowercaseChecked);

    var lenght = document.getElementById("amount").value,
        pass = "",
        lowercase = "abcdefghijklmnoprstuwxyzv",
        uppercase = lowercase.toUpperCase(),
        numbers = "0123456789",
        special = ",./;':{}[]~+()*&^%$#@!=+-_`",
        passChar = "";
    

    if(specialChecked==true){
        ch += 1;
        passChar = passChar + special;
    }
    if(numbersChecked==true){
        ch += 1;
        passChar = passChar + numbers;
    }
    if(uppercaseChecked==true){
        ch += 1;
        passChar = passChar + uppercase;
    }
    if(lowercaseChecked==true){
        ch += 1;
        passChar = passChar + lowercase;
    }

    if(ch<=0){
        errpop(true, "At least one of the boxes must be checked.");
        return;
    }
    else if(lenght<=0){
        errpop(true, "Min characters: 1");
        return;
    }
    else if(lenght>50){
        errpop(true, "Max characters: 50");
        return;
    }
    else{
        errpop(false)
    }

    console.log(passChar);

    for(i = 0; i<=lenght-1; i++){
        const randChar = passChar.charAt(Math.floor(Math.random() * passChar.length));
        console.log(randChar + " " + i);
        pass = pass + randChar;
    }
    console.log(pass);
    document.getElementById("result").innerHTML = ``+pass;

    console.log(lenght);
} 
gen()