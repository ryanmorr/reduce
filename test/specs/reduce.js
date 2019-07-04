import { expect } from 'chai';
import reduce from '../../src/reduce';

describe('reduce', () => {
    it('should reduce an array', () => {
        const array = [1, 2, 3];
        let currentIndex = 0;

        const returnValue = reduce(array, 0, (acc, val, i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(obj).to.equal(array);
            expect(array[currentIndex]).to.equal(val);
            if (i === 0) {
                expect(acc).to.equal(0);
                expect(val).to.equal(1);
            } else if (i === 1) {
                expect(acc).to.equal(1);
                expect(val).to.equal(2);
            } else if (i === 2) {
                expect(acc).to.equal(3);
                expect(val).to.equal(3);
            }
            currentIndex++;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });

    it('should reduce an iterable object', () => {
        const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
        let currentIndex = 0;

        const returnValue = reduce(map, 0, (acc, [key, val], i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(obj).to.equal(map);
            expect(map.get(key)).to.equal(val);
            if (i === 0) {
                expect(acc).to.equal(0);
                expect(key).to.equal('a');
                expect(val).to.equal(1);
            } else if (i === 1) {
                expect(acc).to.equal(1);
                expect(key).to.equal('b');
                expect(val).to.equal(2);
            } else if (i === 2) {
                expect(acc).to.equal(3);
                expect(key).to.equal('c');
                expect(val).to.equal(3);
            }
            currentIndex++;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });

    it('should reduce an enumerable object', () => {
        const object = {a: 1, b: 2, c: 3};
        let currentIndex = 0;

        const returnValue = reduce(object, 0, (acc, [key, val], i, obj) => {
            expect(currentIndex).to.equal(i);
            expect(obj).to.equal(object);
            expect(object[key]).to.equal(val);
            if (i === 0) {
                expect(acc).to.equal(0);
                expect(key).to.equal('a');
                expect(val).to.equal(1);
            } else if (i === 1) {
                expect(acc).to.equal(1);
                expect(key).to.equal('b');
                expect(val).to.equal(2);
            } else if (i === 2) {
                expect(acc).to.equal(3);
                expect(key).to.equal('c');
                expect(val).to.equal(3);
            }
            currentIndex++;
            return acc + val;
        });

        expect(returnValue).to.equal(6);
    });
});
