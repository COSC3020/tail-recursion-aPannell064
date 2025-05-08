
function fib(n) {
    var fib_old = 1;
    var fib = 1;
    var fib_new;
    function fibTR() {
        if(n <= 2) {return fib;}
        fib_new = fib + fib_old;
        fib_old = fib;
        fib = fib_new;
        n--;
        return fibTR();
    }
    return fibTR();
}