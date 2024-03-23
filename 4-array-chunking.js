/* --Directions
Given an array and chunk size, divide the array into
many subarrays where each subarray is of length size.
--Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function chunk(array, size) {
  let chunkedArr = [];
  let bufferArr = [];
  let counter = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    bufferArr.push(array[i]);
    counter++;
    console.log(bufferArr);
    if (counter == size) {
      counter = 0;
      chunkedArr.push(bufferArr);
      bufferArr = [];
    }
  }
  if (array.length % size !== 0) {
    chunkedArr.push(bufferArr);
  }
  return chunkedArr;
}

function chunkA(array, size) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
