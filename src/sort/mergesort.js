const nums = [3, 5, 8, 2, 1, 11, 15];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const arrLen = arr.length;
    const middle = Math.floor(arrLen / 2);
    const firstHalf = arr.slice(0, middle);
    const secondHalf = arr.slice(middle, arrLen);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

const maxInt = Math.pow(2, 32);

function merge(a, b) {
    const result = [];
    while (a.length || b.length) {
        const aItem = a[0] || maxInt;
        const bItem = b[0] || maxInt;

        if (aItem < bItem) {
            result.push(a.shift());
        } else {
            result.push(b.shift());
        }
    }

    return result;
}

