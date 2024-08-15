//Given two integers a and b, return the sum of the numerator and the denominator of the reduced fraction a/b.

function fraction(a, b) {
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const d = gcd(a, b);
    return (a / d) + (b / d);
}