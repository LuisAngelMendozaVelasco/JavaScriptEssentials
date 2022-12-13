/*
"Calling functions"

To call a function, we need to write a function name and follow it with parentheses. 
*/

let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;    
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

/*
Usually, functions are declared before they are called, mostly at the beginning of the code. However, this is only a good practice, which increases the readability of 
the code, not a JavaScript syntax requirement. Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long 
as they are in the scope.

So the code:
    let name = Alice

    function showName() {
        console.log(name);
    }

    showName(); // -> Alice

will work exactly the same as:
    let name = Alice

    showName(); // -> Alice

    function showName() {
        console.log(name);
    }
*/