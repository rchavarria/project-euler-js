
export default class SumOfMultiples {

    listMultiples(n) {
        let multiples = [];

        if (n > 3) {
            multiples.push(3);
        }

        if (n > 5) {
            multiples.push(5);
        }

        return multiples;
    }
}

