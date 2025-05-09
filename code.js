function fibTR(n, old=1, current=1, next) {
    if(n <= 2) {return current;}
    next = current + old;
    old = current;
    current = next;
    return fibTR(n-1, old, current, next);
}
