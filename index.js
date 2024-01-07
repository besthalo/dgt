function findMaximumNumberArray(inputArr) {
  let max = null;

  for (const num of inputArr) {
    if (max == null) {
      max = num;
    } else if (max < num) {
      max = num;
    }
  }
  return max;
}

function findSecondMaximumNumberArray(inputArr) {
  let max1st = null;
  let max2nd = null;

  for (const num of inputArr) {
    if (max1st == null) {
      max1st = num;
      max2nd = num;
    } else if (num > max1st) {
      max2nd = max1st;
      max1st = num;
    } else if (num > max2nd) {
      max2nd = num;
    }
  }
  return max2nd;
}

function findMaximumOfSumNumberNumberArray(input = [], k = 0) {
  let max = null;
  let fromString = "";
  for (let index = 0; index < input.length; index++) {
    if (index + k > input.length) {
      break;
    }
    let newSubArray = input.slice(index, index + k);
    let sum = newSubArray.reduce((a, b) => a + b, 0);
    if (max == null) {
      max = sum;
      fromString = JSON.stringify(newSubArray);
    } else if (sum > max) {
      max = sum;
      fromString = JSON.stringify(newSubArray);
    }
  }

  return { max, fromString };
}

function findMaximumOfSumNumberNumberArray2(input = [], k = 0) {
  let max = null;
  let fromString = "";
  for (let index = 0; index < input.length; index++) {
    if (index + k > input.length) {
      break;
    }
    let newSubArray = input.slice(index, index + k);
    let sum = newSubArray.reduce((a, b) => a + b, 0);
    if (max == null) {
      max = sum;
      fromString = JSON.stringify(newSubArray);
    } else if (sum >= max) {
      max = sum;
      fromString = JSON.stringify(newSubArray);
    }
  }

  return { max, fromString };
}

console.log("-----------A------------");
console.log(
  "result of [ -1, 4, 30, 2, -4 ] maximum is :",
  findMaximumNumberArray([-1, 4, 30, 2, -4])
);

console.log(
  "result of [ 3, 4, 5, 6, 7 ] maximum is :",
  findMaximumNumberArray([3, 4, 5, 6, 7])
);

console.log("-----------Bonus------------");
console.log(
  "result of [ -1, 4, 30, 2, -4 ] findSecondMaximumNumberArray is :",
  findSecondMaximumNumberArray([-1, 4, 30, 2, -4])
);

console.log(
  "result of [ 3, 4, 5, 6, 7 ] findSecondMaximumNumberArray is :",
  findSecondMaximumNumberArray([3, 4, 5, 6, 7])
);

console.log(
  "result of [ 3, 4, 5, 6, 7, 7 ] findSecondMaximumNumberArray is :",
  findSecondMaximumNumberArray([3, 4, 5, 6, 7, 7])
);

console.log("-----------B------------");

console.log(
  "result findMaximumOfSumNumberNumberArray([1, 4, -1, 2, 3], 3) is:",
  findMaximumOfSumNumberNumberArray([1, 4, -1, 2, 3], 3)
);
console.log(
  "result findMaximumOfSumNumberNumberArray([1, 4, -1, 2, 3], 2) is:",
  findMaximumOfSumNumberNumberArray([1, 4, -1, 2, 3], 2)
);

console.log("-----------B2------------");

console.log(
  "result findMaximumOfSumNumberNumberArray([1, 4, -1, 2, 3], 3) is:",
  findMaximumOfSumNumberNumberArray2([1, 4, -1, 2, 3], 3)
);
console.log(
  "result findMaximumOfSumNumberNumberArray([1, 4, -1, 2, 3], 2) is:",
  findMaximumOfSumNumberNumberArray2([1, 4, -1, 2, 3], 2)
);
