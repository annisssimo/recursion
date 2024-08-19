const fibs = (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 2] + array[i - 1]);
    }
  }
  return array;
};

console.log(fibs(8));
