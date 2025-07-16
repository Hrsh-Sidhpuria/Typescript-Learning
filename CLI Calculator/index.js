"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firststr = (0, readline_sync_1.question)("Enter first Num: \n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var seconfstr = (0, readline_sync_1.question)("Enter second operator: \n");
    var isInputValid = isNumber(firststr) && isOperator(operator) && isNumber(seconfstr);
    if (!isInputValid) {
        console.log("Input is not valid! Please enter the valid input.");
        return false;
    }
    var num1 = parseInt(firststr);
    var num2 = parseInt(seconfstr);
    var result = calculate(num1, operator, num2);
    if (result == null) {
        console.log("cant able to solve output. please try again");
        return false;
    }
    console.log("result is : ", result);
    return true;
}
function isNumber(val) {
    var num = parseInt(val);
    var isNum = !isNaN(num);
    return isNum;
}
function isOperator(op) {
    switch (op) {
        case "+":
        case "-":
        case "/":
        case "*":
            return true;
        default:
            return false;
    }
}
function calculate(num1, op, num2) {
    var result = null;
    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        default:
            break;
    }
    return result;
}
main();
