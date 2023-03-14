"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var main = function () {
    var firstString = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondString = (0, readline_sync_1.question)('Enter second number:\n');
    var firstNumber = isNumber(firstString);
    var op = isOperator(operator);
    var secondNumber = isNumber(secondString);
    var validInput = firstNumber && op && secondNumber;
    if (validInput) {
        var firstNumber_1 = Number(firstString);
        var secondNumber_1 = Number(secondString);
        var result = calculate(firstNumber_1, operator, secondNumber_1);
        console.log('\n result:');
        console.log(result);
    }
    else {
        console.log('\n***** Invalid input *****\n');
        main();
    }
};
var isOperator = function (value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
};
var isNumber = function (value) {
    return !isNaN(Number(value));
};
var calculate = function (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return firstNumber + secondNumber;
    }
    if (operator === '-') {
        return firstNumber - secondNumber;
    }
    if (operator === '*') {
        return firstNumber * secondNumber;
    }
    if (operator === '/') {
        return firstNumber / secondNumber;
    }
};
main();
