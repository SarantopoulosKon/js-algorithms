/**
 * @description Utility function to swap places of two items in an array
 * @param {Array} arr 
 * @param {Number} a Position of first item
 * @param {Number} b Position of second item
 */
function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


export default swap;