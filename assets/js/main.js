function startAction() {
    const numArray = [];

    for(let i = 0; i < 6; i++) {
        const number = Math.random() * 45 + 1;
        const nextNumber = Math.floor(number);
        numArray.push(nextNumber);
    }
    
    const num1 = document.getElementById("number1")
    const num2 = document.getElementById("number2")
    const num3 = document.getElementById("number3")
    const num4 = document.getElementById("number4")
    const num5 = document.getElementById("number5")
    const num6 = document.getElementById("number6")

    num1.innerText = numArray[0];
    num1.style.display = "flex";

    setTimeout(function(){
        num2.innerText = numArray[1];
        num2.style.display = "flex";
    }, 1000);

    setTimeout(function(){
        num3.innerText = numArray[2];
        num3.style.display = "flex";
    }, 2000);

    setTimeout(function(){
        num4.innerText = numArray[3];
        num4.style.display = "flex";
    }, 3000);

    setTimeout(function(){
        num5.innerText = numArray[4];
        num5.style.display = "flex";
    }, 4000);

    setTimeout(function(){
        num6.innerText = numArray[5];
        num6.style.display = "flex";
    }, 5000);
}

function exitAction() {
    const flag = confirm("종료하시겠습니까?");


    if (flag) { 
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");
    const num3 = document.getElementById("number3");
    const num4 = document.getElementById("number4");
    const num5 = document.getElementById("number5");
    const num6 = document.getElementById("number6");

    num2.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num1.style.display = "none";
    num5.style.display = "none";
    num6.style.display = "none";
    }
}