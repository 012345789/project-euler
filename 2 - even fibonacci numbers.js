// https://projecteuler.net/problem=2

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

(function fibonacciSumOfEvensBelow4Million() {
	var sum = 0;
  	var counter1 = 1;
  	var counter2 = 2;
  	var temp;
 	while (sum < 4000000) {
      	if (counter2%2 === 0) {
          	sum += counter2;
        }
      	// temp variable needed for non-ES6 standards
      	temp = counter2;
		counter2 = counter1 + counter2;
      	counter1 = temp;
    }
  	console.log(sum);
})();
