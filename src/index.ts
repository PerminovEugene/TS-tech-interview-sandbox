export type Input = string;
export type Output = number;

/*
Phase 3

Modify the function so that string inputs are evaluated now as arithmetical expressions.
 Parsed numbers in the input string that are not multiples of 3 or 5 are treated as the numeric operands in the expression.
  Other parsed numbers are treated as operators in the expression according to the following rules:

multiples of 3 are treated as '+' addition operator
multiples of 5 are treated as '-' subtraction operator
multiples of 3 and 5 are treated as '*' multiplication operator.
Additional rules when evaluating an expression:

operator precedence is ignored, evaluate from left-to-right
If there is no operator between two consecutive integers, then add them together as if there was a '+' between them.
If a number is missing from one side of an operator, then throw an exception with the message "PARSING ERROR"
Modify FizzBuzz to evaluate the resulting arithmetic expression from left to right and return the integer result.

Non-functional requirement: avoid using eval.

Input: ASCII string with length [0, 1000]

Output: integer (exception thrown on parsing errors)

Example output:

FizzBuzz("22") //22
FizzBuzz("Some1") // 1
FizzBuzz("2two 2") // 4
FizzBuzz("2 3 4") // 6
FizzBuzz("2 some3 random4 string5") // EXCEPTION: "PARSING ERROR"
FizzBuzz("2 some3 random3 string4") // EXCEPTION: "PARSING ERROR"
FizzBuzz("2 some 3 big 4 number 5 8") // -2
FizzBuzz("2 some 3 big 4 number 5 8 15 4") // -8

*/

function checkString(char: string) {
  return /^[0-9]*$/.test(char);
}

function processNumbers(first: string, second: string, third: string) {
  const a = parseInt(first);
  const b = parseInt(second);
  const c = parseInt(third);

  const divideBy3 = b % 3;
  const dividedBy5 = b % 5;

  if (divideBy3 === 0 && dividedBy5 === 0) {
    if (!first.length || !second.length) {
      throw new Error("PARSING ERROR");
    }
    return a * c;
  }

  if (divideBy3 === 0) {
    if (!first.length || !second.length) {
      throw new Error("PARSING ERROR");
    }
    return a + c;
  }
  if (dividedBy5 === 0) {
    if (!first.length || !second.length) {
      throw new Error("PARSING ERROR");
    }
    return a - b;
  }
  throw new Error("Invalid logic");
}

function isStringDividable(inputStr: string) {
  const a = parseInt(inputStr);
  const divideBy3 = a % 3;
  const dividedBy5 = a % 5;

  return divideBy3 === 0 || dividedBy5 === 0;
}

export function main(input: Input): Output {
  let result = 0;
  let acc = 0;
  let currentNumber: string = "";
  let firstNumber: string = "";
  let secondNumber: string = "";
  for (let char of input) {
    if (checkString(char)) {
      currentNumber += char;
    } else {
      if (!firstNumber.length) {
        firstNumber = currentNumber;
      } else if (!secondNumber.length) {
        secondNumber = currentNumber;
        if (isStringDividable(firstNumber)) {
          throw Error("PARSING ERROR");
        } else if (!isStringDividable(secondNumber)) {
          result += parseInt(firstNumber) + parseInt(secondNumber);
          firstNumber = "";
          secondNumber = "";
          currentNumber = "";
        }
      } else {
        if (isStringDividable(currentNumber)) {
          throw Error("PARSING ERROR");
        } else {
          result += parseInt(
            processNumbers(firstNumber, secondNumber, currentNumber);
          );
        }
      }
    }
  }

  return result;
}

// const input: Input = 3;

// console.log(main(input));
