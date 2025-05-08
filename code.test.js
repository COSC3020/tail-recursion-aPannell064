const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


function fibTest(n) {
    if (n <= 2) return 1;
    else return fib(n-1) + fib(n-2);
    }

const test =
jsc.forall("nat", function(n) {
    return fib(n) === fibTest(n);
});
jsc.assert(test);
