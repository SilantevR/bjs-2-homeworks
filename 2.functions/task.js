// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = +Infinity;
  max = -Infinity;
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = Number(arr[i].toFixed(2));
    }
    if (arr[i] < min) {
      min = Number(arr[i].toFixed(2));
    }
    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
  }

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (j = 0; j < arrOfArr.length; j++) {
    let ElemArrOfArr = arrOfArr[j];
    let SumArrOfArr = func(ElemArrOfArr);
    if (max < SumArrOfArr) {
      max = SumArrOfArr;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let workerMin = +Infinity;
  let workerMax = -Infinity;
  let result;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > workerMax) {
      workerMax = arr[i];
    }
    if (arr[i] < workerMin) {
      workerMin = arr[i];
    }
  }
  result = Number(Math.abs(workerMax - workerMin).toFixed(2));
  return result;
}
