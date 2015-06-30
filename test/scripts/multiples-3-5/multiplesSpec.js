import SumOfMultiples from '../../../src/scripts/multiples-3-5/multiples.js';

describe('Problem #1: Multiple of 3 and 5', () => {

    describe('#listMultiples', () => {

        it('returns empty list if there is no multiple of 3 or 5 below the given number', () => {
            expect(new SumOfMultiples().listMultiples(1)).to.have.length(0);
        });

        it('returns multiples of 3 below the given number', () => {
            let multiples = new SumOfMultiples().listMultiples(5);

            expect(multiples).to.have.length(1);
            expect(multiples).to.contain(3);
        });

        it('returns multiples of 5 below the given number', () => {
            let multiples = new SumOfMultiples().listMultiples(6);

            expect(multiples).to.have.length(2);
            expect(multiples).to.contain(5);
        });

        it('returns all multiples of 3 below a given number', () => {
            let multiples = new SumOfMultiples().listMultiples(8);

            expect(multiples).to.contain(3);
            expect(multiples).to.contain(6);
        });

        it('returns all multiples of 5 below a given number', () => {
            let multiples = new SumOfMultiples().listMultiples(15);

            expect(multiples).to.contain(5);
            expect(multiples).to.contain(10);
        });

        it('returns multiples of 3 and 5 below a given number only once', () => {
            let multiples = new SumOfMultiples().listMultiples(20);

            // [ 3, 5, 6, 9, 10, 12, 15 (only once), 18 ].length === 8
            expect(multiples).to.have.length(8);
        });

    });

    describe('#sum', () => {

        it('sums all elements in an array', () => {
            let sumOfMultiples = new SumOfMultiples();

            expect(sumOfMultiples.sum([ 1, 2, 3, 4 ])).to.equal(10);
            expect(sumOfMultiples.sum([ 1, 3, 5, 7 ])).to.equal(16);
            expect(sumOfMultiples.sum([ 2, 4, 6, 8, 10 ])).to.equal(30);
        });

    });

});

