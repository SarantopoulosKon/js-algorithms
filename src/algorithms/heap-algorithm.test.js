import permute from './heap-algorithm';


describe('Heap\s algorithm', () => {
    it('Should permute all possible ways', () => {
        const result = Array.from(permute([1, 4, 5]));
        const expected = [[1,4,5], [4,1,5], [5,1,4], [1,5,4], [4,5,1], [5,4,1]];

        expect(result).toEqual(expected);

    })
})