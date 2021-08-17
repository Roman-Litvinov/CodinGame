/* This is my JS, and WTF, condition is unclear,
doesn't look like I'm getting the correct sum
(says #s are supposed to be multiplied by weight from 10 to 1
and then added up - but it gives us a wrong sum, WHAT THE SHIT!?
*/

const digits = readline();
console.error(digits);
let myArray = digits.split('');
let sum = 0;
console.error(myArray.length);

for (let i = 0; i<myArray.length; i++) {
    sum += myArray[i] * (10-i);
 }
console.error('sum is:',sum);

// seriously, WTF.


if (sum == 110) {
    console.log('X');
} else {
    console.log(sum%11);
}




/* THIS IS FROM PYTHON, AND IT WORKS 100% 

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

digits = list(map(int, input()))

weights = range(9, 0, -1)
combs = [d * w for d, w in zip(reversed(digits), weights)]
s = sum(combs)

print(s % 11) if s % 11 < 10 else print("X")

*/