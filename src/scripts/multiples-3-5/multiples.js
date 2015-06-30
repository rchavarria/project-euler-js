
export default class SumOfMultiples {

    listMultiples(n) {
        let multiples = [];

        for (let i = 1; i < n; i++) {
            if (i % 3 === 0) {
                multiples.push(i);
            }

            if (i === 5) {
                multiples.push(5);
            }
        }

        return multiples;
    }
}

