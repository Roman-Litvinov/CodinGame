

// this JS worked 100% - need to figure out the regular expressions:
// was something like:
// - (BEFORE @) 1-9 alphanumerics
// - @
// - (AFTER @ AND BEFORE .) - 1-9 alphanumerics
// - .
// - (AFTER .) - 1-3 alphanumerics

let testCase1 = "foo@bar.com";
console.log(new RegExp(/^[0-9a-z]{1,9}[@]{1}[0-9a-z]{1,7}[.]{1}[a-z]{1,3}$/gi).test(testCase1));

/* ALSO - this is in Python:

import re
print(str(bool(re.search(r"^[a-zA-Z0-9]{1,9}@[a-zA-Z0-9]{1,7}\.[a-zA-Z0-9]{1,3}$",input()))).lower())

*/