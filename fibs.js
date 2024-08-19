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

console.log(fibs(4));

const fibsRec = (n) => {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const array = fibsRec(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
};

console.log(fibsRec(4));
