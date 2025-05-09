function fibTR(n, old=1, current=1) {
    if(n <= 2) {return current;}
    var next = current + old;
    old = current;
    current = next;
    return fibTR(n-1, old, current);
}
