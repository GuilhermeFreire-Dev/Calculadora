var pointInsert = false;
var oprInsert = false;
var operator = "";
var value1 = 0;
var value2 = 0;
var posOperator = 0;
var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var btnPoint = document.querySelector("#btnPoint");
var dsp = document.querySelector(".display");
var oprSum = document.querySelector("#sum");
var oprSub = document.querySelector("#sub");
var oprDiv = document.querySelector("#divi");
var oprMul = document.querySelector("#mult");
var result = document.querySelector("#result");
var clear = document.querySelector("#clear");

btn0.addEventListener("click", () => {dsp.textContent += "0";});
btn1.addEventListener("click", () => {dsp.textContent += "1";});
btn2.addEventListener("click", () => {dsp.textContent += "2";});
btn3.addEventListener("click", () => {dsp.textContent += "3";});
btn4.addEventListener("click", () => {dsp.textContent += "4";});
btn5.addEventListener("click", () => {dsp.textContent += "5";});
btn6.addEventListener("click", () => {dsp.textContent += "6";});
btn7.addEventListener("click", () => {dsp.textContent += "7";});
btn8.addEventListener("click", () => {dsp.textContent += "8";});
btn9.addEventListener("click", () => {dsp.textContent += "9";});

clear.addEventListener(
    "click", 
    () => {
        dsp.textContent = "";
        pointInsert = false;
        oprInsert = false;
    }
);

oprSum.addEventListener(
    "click", 
    () => {
        operator = "+";
        insertOperator();
    }
);

oprSub.addEventListener(
    "click", 
    () => {
        operator = "-";
        insertOperator();
    }
);

oprDiv.addEventListener(
    "click", 
    () => {
        operator = "/";
        insertOperator();
    }
);

oprMul.addEventListener(
    "click", 
    () => {
        operator = "*";
        insertOperator();
    }
);

btnPoint.addEventListener(
    "click", 
    () => {
        if (!pointInsert) {
            dsp.textContent += ".";
            pointInsert = true;
        }
    }
);

result.addEventListener(
    "click",
    () => {
        value2 = Number(dsp.textContent.substring(posOperator + 1, dsp.textContent.length));
        try {
            switch (operator) {
                case "+":
                    dsp.textContent = value1 + value2;
                    break;
                case "-":
                    dsp.textContent = value1 - value2;
                    break;
                case "*":
                    dsp.textContent = value1 * value2;
                    break;
                case "/":
                    dsp.textContent = value1 / value2;
                    break;
                default:
                    dsp.textContent = "0";
                    break;
            }

            oprInsert = false;
        } catch (error) {
            console.log(error);
        }
    }
);

function insertOperator() {

    if (!oprInsert && dsp.textContent.length > 0) {
        posOperator = dsp.textContent.length;
        value1 = Number(dsp.textContent);
        dsp.textContent += operator;
        oprInsert = true;
        pointInsert = false;
    }
}

