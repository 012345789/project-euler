// https://projecteuler.net/problem=3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

(function largestPrimeFactorOf600851475143() {
    var dividend = 600851475143;
    var possibleFactor = 2;
    while (possibleFactor < dividend) {
        if (dividend%possibleFactor === 0) {
            dividend = dividend/possibleFactor;
            continue;
        }
        possibleFactor++;
    }
    console.log(dividend);
})();