function quickSelect(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }
    const partitionIndex = partition(arr, left, right);
  
    if (partitionIndex === k) {
      return arr[partitionIndex];
    } else if (k > partitionIndex) {
      return quickSelect(arr, partitionIndex + 1, right, k);
    } else {
      return quickSelect(arr, left, partitionIndex - 1, k);
    }
  }
  
  function partition(arr, left, right) {
    const pivot = arr[right];
    let start = left;
  
    for (let i = left; i <= right; i++) {
  
      if (arr[i] > pivot) {
        swap(arr, i, start);
        start++;
      }
  
    }
  
    swap(arr, start, right);
  
    return start;
  }
  
  function swap(arr, a, b) {
    const temp = arr[b];
  
    arr[b] = arr[a];
    arr[a] = temp;
  }
  