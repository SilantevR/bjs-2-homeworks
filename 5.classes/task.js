class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  set state(value) {
    if (value > 100) {
      this._state = 100;
    } else if (value < 0) {
      this._state = 0;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = "magazine") {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = "book") {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class FantasticBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type = "fantastic"
  ) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type = "detective"
  ) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let x in this.books) {
      if (this.books[x][type] === value) {
        return this.books[x];
        break;
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    let result;
    for (let x in this.books) {
      if (this.books[x].name === bookName) {
        result = this.books.splice(x, 1);
        return result[0];
        break;
      }
    }
    return null;
  }
}

class Student {
  constructor(name, subject = []) {
    this.name = name;
    this.subject = subject;
  }

  addMark(mark, subject) {
    if (mark > 5 || mark < 1) {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
    } else if (this.subject.length === 0) {
      this.subject[0] = { name: subject, mark: [mark] };
    } else {
      let listOfSubject = [];
      let keys = this.subject.keys();
      for (let x of keys) {
        listOfSubject.push(this.subject[x].name);
      }
      if (!listOfSubject.includes(subject)) {
        this.subject.push({ name: subject, mark: [mark] });
      } else {
        this.subject[
          listOfSubject.findIndex((item) => item === subject)
        ].mark.push(mark);
      }
    }
  }
  getAverageBySubject(subject) {
    let listOfSubject = [];
    let keys = this.subject.keys();
    for (let x of keys) {
      listOfSubject.push(this.subject[x].name);
    }
    if (!listOfSubject.includes(subject)) {
      console.log("Несуществующий предмет");
    } else {
      let sum = 0;
      for (let x of this.subject[
        listOfSubject.findIndex((item) => item === subject)
      ].mark) {
        sum += x;
      }
      let result =
        sum /
        this.subject[listOfSubject.findIndex((item) => item === subject)].mark
          .length;
      console.log(`Средний балл по предмету ${subject} ${result}`);
      return result;
    }
  }

  getAverage() {
    let sum = 0;
    let numberOfMarks = 0;
    let keys = this.subject.keys();
    for (let x of keys) {
      for (let y of this.subject[x].mark) {
        sum += y;
        numberOfMarks++;
      }
    }

    let result = sum / numberOfMarks;

    console.log(`Средний балл по всем предметам ${result}`);
    return result;
  }

  exclude(reason) {
    delete this.subject;
    this.excluded = reason;
    console.log(`${reason}`);
  }
}
