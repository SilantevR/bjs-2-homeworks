class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, callback, id) {
    //let listOfId = [];
    //this.alarmCollection.forEach((item) => listOfId.push(item.id));
    if (!id) {
      throw new Error("ID задан неправильно");
    } else if (this.alarmCollection.some((item) => item.id === id)) {
      console.error("Будильник с таким id уже существует");
      return;
    } else {
      this.alarmCollection.push({ id, time, callback });
    }
  }
  removeClock(id) {
    //let listOfId = [];
    //this.alarmCollection.forEach((item) => listOfId.push(item.id));
    let removeElem = this.alarmCollection.findIndex((item) => item.id === id);
    if (removeElem !== -1) {
      this.alarmCollection.splice(removeElem, 1);
      return true;
    }
    return false;
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
      if (alarm.time === this.getCurrentFormattedTime()) {
        return alarm.callback();
      }
    };
    this.alarmCollection.forEach((item) => checkClock(item));
  }
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerID);
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
