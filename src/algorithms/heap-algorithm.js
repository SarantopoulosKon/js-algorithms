import swap from '../utils/swap';

/**
 * Heap's algorithm, permutation generator, read more [here](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
 * or Robert Sedgewick’s book about algorithms
 */

const isOdd = (n) => n % 2;

function *permute(a, n = a.length) {
    if (n <= 1) {
        yield a.slice();
    } else {
        for (let i = 0; i < n; i++) {
            yield* permute(a, n - 1);

            if (isOdd(n)) {
                swap(a, n - 1, 0);
            } else {
                swap(a, n - 1, i);
            }
        }
    }
}





export default permute;