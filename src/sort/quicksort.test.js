import quicksort from './quicksort';


const arr = [3, 2, 5, 1, 8, 0];


describe('Quicksort', () => {
    it('Should sort the list', () => {
        const expected = [0, 1, 2, 3, 5, 8];
        const result = quicksort(arr, 0, arr.length - 1);

        expect(result).toEqual(expected);
    })
})