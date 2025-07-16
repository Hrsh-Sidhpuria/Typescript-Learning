import {question} from 'readline-sync'



type nullableNumber = number | null;

function main():boolean{
    const firststr: string = question("Enter first Num: \n")
    const operator :string = question("Enter operator: \n")
    const seconfstr :string = question("Enter second operator: \n")

    let isInputValid : boolean = isNumber(firststr) && isOperator(operator) && isNumber(seconfstr);
    if(!isInputValid)
    {
            console.log("Input is not valid! Please enter the valid input.");
            return false;
            
    }
    let num1 = parseInt(firststr);
    
    let num2 = parseInt(seconfstr);
    let result : nullableNumber = calculate(num1,operator,num2);
    if(result == null)
    {
        console.log("cant able to solve output. please try again");
        
        return false;
    }
    console.log("result is : ", result);
    return true;
    
}

function isNumber(val : string) : boolean
{
    let num = parseInt(val);
    let isNum = !isNaN(num);
    
    return isNum;
}

function isOperator(op : string) : boolean
{
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

function calculate(num1 : number, op : string,num2 : number):nullableNumber
{
    let result : nullableNumber =null;
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