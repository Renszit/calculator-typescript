import {question} from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

const main = (): void => {
    const firstString:string = question('Enter first number:\n');
    const operator:string = question('Enter operator:\n');
    const secondString:string = question('Enter second number:\n');

    const firstNumber = isNumber(firstString) 
    const op = isOperator(operator)
    const secondNumber = isNumber(secondString)

    const validInput: boolean = firstNumber && op && secondNumber; 
    
    if (validInput) {
      
    const firstNumber = Number(firstString);
    const secondNumber = Number(secondString);
    const result = calculate(firstNumber, operator as Operator, secondNumber);
        console.log('\n result:')
        console.log(result)
    } else {
        console.log('\n***** Invalid input *****\n');
        main()
    }
    }



const isOperator = (value: string): boolean => {
    return value === '+' || value === '-' || value === '*' || value === '/';
}

const isNumber = (value: string): boolean => {
    return !isNaN(Number(value));
}

const calculate = (firstNumber: number, operator: Operator, secondNumber: number): number => {
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
}

main();