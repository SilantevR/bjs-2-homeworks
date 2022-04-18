function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length < arr2.length) {
    arr2.every((element, idx) => (result = element === arr1[idx]));
  } else {
    arr1.every((element, idx) => (result = element === arr2[idx]));
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr
    .filter((item) => item >= 0)
    .filter((item) => item % 3 === 0)
    .map((item) => (item *= 10));

  return resultArr; // array
}
