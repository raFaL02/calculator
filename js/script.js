const calculator = document.querySelector("#calculator");
const display = document.querySelector("#display");
const lastCalcText = document.querySelector("#last-calc");
const result = document.querySelector("#result");
const keyboard = document.querySelectorAll("#keyboard");


class CalculatorFunc {
    constructor(lastCalcText, result) {
        this.lastCalcText = lastCalcText;
        this.result = result;
        this.lastCalc = "";
    }

    // add digit to calculator display
    addDigit(digit) {
    // check if current operation already has a dot
    if(digit === "," && this.lastCalcText.innerText.includes(",")) {
        return;
    }   

        this.lastCalc = digit;
        this.updateScreen();
    }

    // Process all calculator operation
    processOperation(operation) {
        // Get current and previous value
        let operationValue; 
        const previous = +this.lastCalcText.innerText;
        const current = +this.result.innerText;

        switch(operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }

    // change values of the calculator display
    updateScreen(operationValue = null, operation = null, current = null, previous = null) {
        
        if(operationValue === null) {
            this.lastCalcText.innerText += this.lastCalc
        }else {
            // check if value is zero, if it is just add current value
            if(previous === 0) {
                operationValue = current;
            }
            
            // add current value to previous
            this.lastCalcText.innerText = `${operationValue} ${operation}`
            this.result.innerText = "";
        }

    }
}

const calc = new CalculatorFunc(lastCalcText, result);   

keyboard.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const value = e.target.innerText;

        if(+value >= 0 || value === ",") {
            calc.addDigit(value);
        }else {
            calc.processOperation(value);
        }

    });
});