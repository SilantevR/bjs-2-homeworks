"use strict";
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark); // добавить вторую и последующие оценки в массив
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks); // добавить вторую и последующие оценки в массив
  }
};

Student.prototype.getAverage = function () {
  let sum;
  if (this.marks !== undefined) {
    sum = 0;
    this.marks.keys();
    for (let keys of this.marks) {
      sum += keys;
    }
  }
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
// ваш код для остальных методов
