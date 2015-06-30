function isMultipleOf(candidate, divisor) {
    return candidate % divisor === 0;
}

export default class SumOfMultiples {

    listMultiples(n) {
        let multiples = [];
        let divisors = [ 3, 5 ];

        for (let i = 1; i < n; i++) {
            divisors.forEach((divisor) => {
                if (isMultipleOf(i, divisor)) {
                    multiples.push(i);
                }
            });
            // if (isMultipleOf(i, 3)) {
            //     multiples.push(i);
            // }

            // if (isMultipleOf(i, 5)) {
            //     multiples.push(i);
            // }
        }

        return multiples;
    }
}

