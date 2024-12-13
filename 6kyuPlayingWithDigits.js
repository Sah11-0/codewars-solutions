function digPow(n, p) {
    const digits = String(n).split('').map(Number);
    const sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, p + index), 0);
    return sum % n === 0 ? sum / n : -1;
}
