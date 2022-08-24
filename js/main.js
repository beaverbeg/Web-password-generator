window.addEventListener("load", main())

function main(){
    document.body.innerHTML = `
    <h1 class="Title">Password Generator</h1>
    <div class="credit"><h5>made by <a href="https://www.beaverbeg.xyz" target="_blank">beaverbeg</a></h5></div>
    <form action="" method="post" name="Form" onsubmit="return gen()"></form>
    <div class="inputs">
        <div class="input-div lenght-div"> 
            <h3>charecters</h3>
            <input class="amount" type="number" value="20" id = "amount">
        </div>
        <div class="input-div setting-div-holder">
            <div class="setting-div">
                special characters
                <input class="special-c" type="checkbox" name="special-characters" id="special-c" checked = "true">
            </div>
            <div class="setting-div">
                numbers
                <input class="num" type="checkbox" name="numbers" id="num" checked = "true">
            </div>
            <div class="setting-div">
                uppercase characters
                <input class="upper-c" type="checkbox" name="uppercase" id="upper-c" checked = "true">
            </div>
            <div class="setting-div">
                lowercase characters
                <input class="lower-c" type="checkbox" name="lowercase" id="lower-c" checked = "true">
            </div>
        </div>
    </div>
    <div class="gen-button-div">
        <button class="gen-button" onclick="gen()">Generate</button>
    </div>
    <div class="result-div">
        Result:
        <h2 id="result"></h2>
    </div>
    `;
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
        special = ",./;':{}[]~+()*&^%$#@!=+-_`",
        passChar = "";
    
    if(specialChecked==true){
        passChar = passChar + special;
    }
    if(numbersChecked==true){
        passChar = passChar + numbers;
    }
    if(uppercaseChecked==true){
        passChar = passChar + uppercase;
    }
    if(lowercaseChecked==true){
        passChar = passChar + lowercase;
    }
    console.log(passChar);

    for(i = 0; i<=lenght; i++){
        const randChar = passChar.charAt(Math.floor(Math.random() * passChar.length));
        console.log(randChar + " " + i);
        pass = pass + randChar;
    }
    console.log(pass);
    document.getElementById("result").innerHTML = ``+pass;

    console.log(lenght);
} 
main();
