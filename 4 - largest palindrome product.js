// https://projecteuler.net/problem=4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

(function largestPalindromeProductOfTwo3DigitNumbers() {
	var largestProduct = 998001;
	var factors = [];
	while (factors.length === 0 && largestProduct >= 10000) {
		if (isPalindromeInteger(largestProduct)) {
			factors = find3DigitFactors(largestProduct);
		}
		if (factors.length > 0) {
			break;
		} else {
			largestProduct--;
		}
	}
	console.log(largestProduct);
})();

function isPalindromeInteger(value) {
	// does not support hexidecimal. So don't prepend integers with a 0
	value = value.toString();
	for (var i = 0; i <= value.length/2; i++) {
		if (value[i] !== value[value.length - i - 1])
			return false;
		}
	return true;	
}

function find3DigitFactors(value) {
	var f1 = 999;
	var f2;
	while (f1 >= 100) {
		if (value%f1 === 0) {
			f2 = value/f1;
			if (f2 >= 100 && f2 <= 999)
				return [f1, f2];
		}
		f1--;
	}
	return [];
}