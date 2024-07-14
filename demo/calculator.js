import yargs  from "yargs";
import { hideBin } from "yargs/helpers"
import chalk from "chalk";
const { x, y, oper } = yargs(hideBin(process.argv)).argv

if(typeof x !== "number" || typeof y !== "number" || typeof oper !== "string") {
    console.log(chalk.red("Invalid params"));
}

// const [bin, bin2, numberOne, operation, numberTwo] = process.argv;

// console.log(process.argv[2]); [0, 1, 2]

// int - 5, 7, 66, 87, 3434324
// float - 3.14, 65.89
// parseFloat, parseInt, Number

// const numberOneFloat = Number(numberOne)
// const numberTwoFloat = Number(numberTwo)
let result = 0;



switch (oper) {
    case "add":
        result = x + y
        break;

    case "sub":
        result = x - y
        break;

    case "div":
        result = x / y
        break;

    case "mul":
        result = x * y
        break;

    default:
        break;
}

console.log(`Result is: ${result}`)

// calculator.js 2 + 2
// calculator.js 2 - 2
// calculator.js 2 / 2
// calculator.js 2 x 2


// windows
// node .\demo\calculator.js 2 - 2

// MacOS or Linux
// node ./demo/calculator.js 2 - 2