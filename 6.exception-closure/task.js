let parseCount = function (number) {
  let result = parseInt(number, 10);
  if (isNaN(result)) {
    let err = new Error("Невалидное значение");
    throw err;
  } else {
    return result;
  }
};

let validateCount = function (number) {
  try {
    return parseCount(number);
  } catch (err) {
    return err;
  }
};

class Triangle {
  constructor(a, b, c) {
    this.triangle = [a, b, c];
  }
  set triangle(value) {
    if (
      value[0] + value[1] < value[2] ||
      value[1] + value[2] < value[0] ||
      value[0] + value[2] < value[1]
    ) {
      let err = new Error("Треугольник с такими сторонами не существует");
      throw err;
    } else {
      this.a = value[0];
      this.b = value[1];
      this.c = value[2];
    }
  }
  getPerimeter() {
    let p = this.a + this.b + this.c;
    return Number(p.toFixed(3));
  }
  getArea() {
    let p = 0.5 * (this.a + this.b + this.c);
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}
class Empty {
  getPerimeter() {
    return "Ошибка! Треугольник не существует";
  }
  getArea() {
    return "Ошибка! Треугольник не существует";
  }
}
let getTriangle = function (a, b, c) {
  let triangle;
  try {
    triangle = new Triangle(a, b, c);
    return triangle;
  } catch (err) {
    triangle = new Empty();
    return triangle;
  }
};
