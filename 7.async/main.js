// тут вы можете вызывать функции из task.js
let testCase = new AlarmClock();
testCase.addClock(
  "08:56",
  () => {
    console.log("click");
    setTimeout(console.log("click"), 2000);
  },
  1
);
testCase.addClock(
  "08:57",
  () => {
    console.log("Пора вставать!");
    testCase.removeClock(2);
  },
  2
);

testCase.addClock(
  "08:58",
  () => {
    console.log("Всё проспал!");
    testCase.stop();
    testCase.clearAlarms();
    testCase.printAlarms();
  },
  3
);

testCase.printAlarms();
testCase.start();
