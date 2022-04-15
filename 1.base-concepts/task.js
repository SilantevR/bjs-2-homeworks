"use strict";
function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent) || Number(percent) <= 1 || Number(percent) > 100) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution) || Number(contribution) < 0) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (
    isNaN(amount) ||
    Number(amount) <= 0 ||
    Number(amount) < Number(contribution)
  ) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let S = Number(amount) - Number(contribution);
    let P = percent / 100 / 12;
    let today = new Date();
    let creditStartYear = today.getFullYear();
    let creditStartMonth = today.getMonth();
    let creditEndYear = date.getFullYear();
    let creditEndMonth = date.getMonth();
    let n =
      (creditEndYear - creditStartYear) * 12 +
      (creditEndMonth - creditStartMonth);
    let payment = S * (P + P / ((1 + P) ** n - 1));
    totalAmount = Number((payment * n).toFixed(2));
  }

  return totalAmount;
}
