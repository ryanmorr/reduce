import { expect } from 'chai';
import { reduceRight } from '../../src/reduce';

describe('reduceRight', () => {
    it('should reduce an array', () => {
        const array = [1, 2, 3];
        let currentIndex = 2;

        const returnValue = reduceRight(array, 0, (acc, val, i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(array[currentIndex]).to.equal(val);
            expect(array).to.equal(obj);
            if (i === 2) {
                expect(acc).to.equal(0);
                expect(val).to.equal(3);
            } else if (i === 1) {
                expect(acc).to.equal(3);
                expect(val).to.equal(2);
            } else if (i === 0) {
                expect(acc).to.equal(5);
                expect(val).to.equal(1);
            }
            currentIndex--;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });

    it('should reduce an array-like object', () => {
        function args() {
            return arguments;
        }

        const arrayLike = args(1, 2, 3);
        let currentIndex = 2;

        const returnValue = reduceRight(arrayLike, 0, (acc, val, i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(arrayLike[currentIndex]).to.equal(val);
            expect(arrayLike).to.equal(obj);
            if (i === 2) {
                expect(acc).to.equal(0);
                expect(val).to.equal(3);
            } else if (i === 1) {
                expect(acc).to.equal(3);
                expect(val).to.equal(2);
            } else if (i === 0) {
                expect(acc).to.equal(5);
                expect(val).to.equal(1);
            }
            currentIndex--;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });

    it('should reduce an iterable object', () => {
        const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
        let currentIndex = 2;

        const returnValue = reduceRight(map, 0, (acc, [key, val], i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(map.get(key)).to.equal(val);
            expect(map).to.equal(obj);
            if (i === 2) {
                expect(acc).to.equal(0);
                expect(key).to.equal('c');
                expect(val).to.equal(3);
            } else if (i === 1) {
                expect(acc).to.equal(3);
                expect(key).to.equal('b');
                expect(val).to.equal(2);
            } else if (i === 0) {
                expect(acc).to.equal(5);
                expect(key).to.equal('a');
                expect(val).to.equal(1);
            }
            currentIndex--;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });

    it('should reduce a plain enumerable object', () => {
        const object = {a: 1, b: 2, c: 3};
        let currentIndex = 2;

        const returnValue = reduceRight(object, 0, (acc, [key, val], i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(object[key]).to.equal(val);
            expect(object).to.equal(obj);
            if (i === 2) {
                expect(acc).to.equal(0);
                expect(key).to.equal('c');
                expect(val).to.equal(3);
            } else if (i === 1) {
                expect(acc).to.equal(3);
                expect(key).to.equal('b');
                expect(val).to.equal(2);
            } else if (i === 0) {
                expect(acc).to.equal(5);
                expect(key).to.equal('a');
                expect(val).to.equal(1);
            }
            currentIndex--;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });
});
