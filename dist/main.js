function fib_sum(n) {
    if (n == 0)
        return 1;
    if (n == 1)
        return 2;
    return fib_sum(n - 1) + fib_sum(n - 2) + 1;
}
console.log(fib_sum(10));
//# sourceMappingURL=main.js.map