export const calculateExpression = (arr) => {
  const operators = ["+", "-", "*", "/"];
  let currentNumber = "";
  let result = 0;
  let currentOperator = "+";

  for (const element of arr) {
    if (operators.includes(element)) {
      // If the current element is an operator, update the current operator
      currentOperator = element;
    } else {
      // If the current element is a number or a decimal point, append it to the current number
      currentNumber += element;

      // If the next element is an operator or the last element in the array, perform the calculation
      if (
        operators.includes(arr[arr.indexOf(element) + 1]) ||
        element === arr[arr.length - 1]
      ) {
        const num = parseFloat(currentNumber);
        switch (currentOperator) {
          case "+":
            result += num;
            break;
          case "-":
            result -= num;
            break;
          case "*":
            result *= num;
            break;
          case "/":
            result /= num;
            break;
          default:
            break;
        }

        // Reset the current number for the next iteration
        currentNumber = "";
      }
    }
  }

  return result;
};

// Example usage:
// const array1 = [2, 3, 4, "+", 4, 5];
// Output: 239
// console.log(calculateExpression(array1));

// const array2 = [2, ".", 3, "+", 5];
// Output: 7.3
// console.log(calculateExpression(array2));
