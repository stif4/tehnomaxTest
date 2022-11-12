function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right, key) {
  let pivot = items[Math.floor((right + left) / 2)][key], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i][key] < pivot) {
      i++;
    }
    while (items[j][key] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

export function quickSort(items, left, right, key) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right, key); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1, key);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right, key);
    }
  }
  return items;
}
// first call to quick sort
// const sortedArray = quickSort(items, 0, items.length - 1, "mathTitle");

