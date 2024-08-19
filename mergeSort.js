const merge = (leftSide, rightSide) => {
  const mergedArray = [];
  let leftSideIndex = 0;
  let rightSideIndex = 0;

  while (leftSideIndex < leftSide.length && rightSideIndex < rightSide.length) {
    if (leftSide[leftSideIndex] < rightSide[rightSideIndex]) {
      mergedArray.push(leftSide[leftSideIndex]);
      leftSideIndex++;
    } else {
      mergedArray.push(rightSide[rightSideIndex]);
      rightSideIndex++;
    }
  }

  return mergedArray
    .concat(leftSide.slice(leftSideIndex))
    .concat(rightSide.slice(rightSideIndex));
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middleIndex);
  const rightSide = array.slice(middleIndex);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
};
