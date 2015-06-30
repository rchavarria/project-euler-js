import HookUp from '../../../src/scripts/multiples-3-5/multiples.js';

describe('Problem #1: Multiple of 3 and 5', () => {

    it('hook up test', () => {
        expect(new HookUp().isFalse()).equal(false);
    });

    describe('#listMultiples', () => {

        it('returns empty list if there is no multiple of 3 or 5 below the given number', () => {
            expect(new HookUp().listMultiples(1)).to.have.length(0);
        });

        it('returns multiples of 3 below the given number', () => {
            let multiples = new HookUp().listMultiples(5);

            expect(multiples).to.have.length(1);
            expect(multiples).to.contain(3);
        });

    });

});

