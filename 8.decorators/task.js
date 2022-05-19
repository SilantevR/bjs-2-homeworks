function cachingDecoratorNew(func) {
  let cache = {};
  return function wrapper(...args) {
    const hash = args.join(",");
    if (hash in cache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    }

    let result = func.call(this, ...args);
    let keys = Object.keys(cache);
    if (keys.length >= 5) {
      delete cache[keys[0]];
    }
    cache[hash] = result;
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let timer;
  //let count = 0;

  return function () {
    //console.log(++count);
    clearTimeout(timer);
    timer = setTimeout(() => {
      timeout = false;
      //func(); Если добавить, тогда функция будет вызываться на 5 и 7 вызове
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
  wrapper.count = 0;
  function wrapper() {
    console.log(++wrapper.count);
    clearTimeout(timer);
    timer = setTimeout(() => {
      timeout = false;
    }, ms);
    if (timeout) {
      return;
    }
    func();
    timeout = true;
  }
  return wrapper;
}
