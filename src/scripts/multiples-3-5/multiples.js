function isMultipleOf(candidate, divisor) {
    return candidate % divisor === 0;
}

export default class SumOfMultiples {

    listMultiples(n) {
        let multiples = new Set();
        let divisors = [ 3, 5 ];

        for (let i = 1; i < n; i++) {
            divisors.forEach((divisor) => {
                if (isMultipleOf(i, divisor)) {
                    multiples.add(i);
                }
            });
        }

        return Array.from(multiples);
    }

    sum(multiples) {
        return multiples.reduce((a, b) => a + b, 0);
    }

}

