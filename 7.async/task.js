class AlarmClock {
  constructor(id, alarmCollection = []) {
    this.alarmCollection = alarmCollection;
    this.timerId = null;
  }
  addClock(time, fn, id) {
    let listOfId = [];
    this.alarmCollection.forEach((item) => listOfId.push(item.id));
    if (id === undefined) {
      throw new Error("error text");
    } else if (listOfId.includes(id)) {
      console.error("Будильник с таким id уже существует");
      return;
    } else {
      this.alarmCollection.push({ id: id, time: time, callback: fn });
    }
  }
  removeClock(id) {
    let listOfId = [];
    this.alarmCollection.forEach((item) => listOfId.push(item.id));
    let removeElem = listOfId.findIndex((item) => item === id);
    this.alarmCollection.splice(removeElem, 1);
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  start() {
    if (this.timerId === null) {
      this.timerId = setInterval(() => this.start(), 60000);
    }
    let checkClock = (alarm) => {
      let time = `${this.getCurrentFormattedTime()}`;
      if (alarm.time === time) {
        return alarm.callback();
      }
    };
    this.alarmCollection.forEach((item) => checkClock(item));
  }
  stop() {
    if (this.timerId !== null) {
      this.timerId = null;
    }
  }
  printAlarms() {
    this.alarmCollection.forEach((item) =>
      console.log(`Будильник № ${item.id} заведен на ${item.time}`)
    );
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
