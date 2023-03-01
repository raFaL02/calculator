const calculator = document.querySelector("#calculator");
const display = document.querySelector("#display");
const lastCalcText = document.querySelector("#last-calc");
const result = document.querySelector("#result");
const keyboard = document.querySelectorAll("#keyboard");


class CalculatorFun {
    constructor(lastCalcText, result) {
        this.lastCalcText = lastCalcText;
        this.result = result;
        this.lastCalc = "";
    }

    // add digit to calculator display
    addDigit(digit) {
        this.lastCalc = digit;
        this.updateScreen();
    }

    // change values of the calculator display
    updateScreen() {
        this.lastCalcText.innerText += this.lastCalc
    }
}

const calc = new CalculatorFun(lastCalcText, result);   

keyboard.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const value = e.target.innerText;

        if(+value >= 0 || value === ",") {
            calc.addDigit(value);
        }else {
            console.log("Op" + value);
        }

    });
});