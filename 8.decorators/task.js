function cachingDecoratorNew(func) {
  let cache = {};
  return function wrapper(...args) {
    const hash = args.join(",");
    if (hash in cache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    } else {
      let result = func.call(this, ...args);
      let keys = Object.keys(cache);
      if (keys.length >= 5) {
        delete cache[keys[0]];
      }
      cache[hash] = result;
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  };
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let timer;
  let timerForLast;
  //let count = 0;

  return function () {
    //console.log(++count);
    clearTimeout(timer);
    clearTimeout(timerForLast);
    timer = setTimeout(() => {
      timeout = false;
      timerForLast = setTimeout(func, ms);
    }, ms);
    if (timeout) {
      return;
    }
    func();
    timeout = true;
  };
}

function debounceDecorator2(func, ms) {
  let timeout;
  let timer;
  let timerForLast;
  let count = 0;

  return function () {
    console.log(++count);
    clearTimeout(timer);
    clearTimeout(timerForLast);
    timer = setTimeout(() => {
      timeout = false;
      timerForLast = setTimeout(func, ms);
    }, ms);
    if (timeout) {
      return;
    }
    func();
    timeout = true;
  };
}
