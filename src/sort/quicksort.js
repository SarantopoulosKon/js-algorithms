import swap from '../utils/swap';

function partition(arr, left, right) {
    const pivotPoint = Math.floor((right + left) / 2);
    const pivot = arr[pivotPoint];
    let low = left; // left pointer
    let high = right; // right pointer

    while (low <= high) {
        while (arr[low] < pivot) {
            low++;
        }

        while (arr[high] > pivot) {
            high--;
        }

        if (low <= high) {
            swap(arr, low, high);
            low++;
            high--;
        }
    }

    return low;
}

function quicksort(arr, left, right) {
    // Case either empty array or with one element
    if (arr.length <= 1) {
        return arr;
    }

    const index = partition(arr, left, right);

    if (left < index - 1) {
        quicksort(arr, left, index - 1);
    }
    
    if (index < right) {
        quicksort(arr, index, right);
    }

    return arr;
}


export default quicksort;