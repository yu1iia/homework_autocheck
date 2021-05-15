// Задача 1

// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// Тесты
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает true.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов child.hasOwnProperty('name') возвращает true.
// Обращение к child.name возвращает 'Jason'.
// Вызов child.hasOwnProperty('age') возвращает true.
// Обращение к child.age возвращает 27.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Используется метод Object.create().

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

console.log(child.hasOwnProperty('name'));
console.log(child.hasOwnProperty('age'));
console.log(child.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('heritage'));
console.log(parent.isPrototypeOf(child));

// Задача 2.
// Цепочка прототипов
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// Тесты
// Объявлена переменная ancestor.
// Значение переменной ancestor это объект.
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Обращение к parent.surname возвращает 'Moore'.
// Обращение к parent.heritage возвращает 'Irish'.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает false.
// Вызов ancestor.isPrototypeOf(parent) возвращает true.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к ancestor.heritage возвращает 'Irish'.
// Вызов ancestor.hasOwnProperty('surname') возвращает true.
// Вызов ancestor.hasOwnProperty('heritage') возвращает true.
// Обращение к ancestor.surname возвращает 'Dawson'.
// Используется метод Object.create().

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки

console.log(parent.isPrototypeOf(child));
console.log(parent.hasOwnProperty('surname'));
console.log(parent.hasOwnProperty('heritage'));
console.log(ancestor.isPrototypeOf(parent));
console.log(ancestor.hasOwnProperty('heritage'));

// Задача 3

// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// Тесты
// Объявлена функция Car(brand, model, price).
// В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
const bmw = new Car('BMW', 'X5', 58900);
const nissan = new Car('Nissan', 'Murano', 31700);

console.log(audi);
console.log(bmw);
console.log(nissan);

// Задача 4

// Задание
// Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.

// Тесты
// Объявлена функция Car({ brand, model, price }).
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
const bmw = new Car('BMW', 'X5', 58900);
const nissan = new Car('Nissan', 'Murano', 31700);

console.log(audi);
console.log(bmw);
console.log(nissan);

// Задача 5

// Задание
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// Тесты
// Объявлена функция Car({ brand, model, price }).
// Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
// Значение Car.prototype.getPrice это функция.
// Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
// Значение Car.prototype.changePrice это функция.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi.getPrice());
audi.changePrice(35000);
console.log(audi.getPrice());

// Задача 6

// Задача. Хранилище
// Задание
// Напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в тойпоследовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлена функция Storage(items).
// Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
// В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
// Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
// У объекта storage есть свойство items.
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
// Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
// Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].

function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  const itemIndex = this.items.indexOf(item);
  this.items.splice(itemIndex, 1);
};
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Задача 7

// Конструктор строк
// Задание
// Напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлена функция StringBuilder(baseValue).

// Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.

// Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.

// Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.

// Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.

// В результате вызова new StringBuilder('.') значение переменной builder это объект.

// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.

// У объекта builder есть свойство value.

// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.

// Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.

// Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.

// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.

// Задача 8

// Задание
// Используя ключевое слово class объяви класс Car с пустым телом.

// Тесты
// Объявлен класс Car с пустым телом.
// Результат вызова new Car() это пустой объект.

// class Car {
// }

// console.log(new Car());

// Задача 9

// Задание
// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

// Тесты
// Объявлен класс Car.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

class Car {
  brand;
  model;
  price;
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi);

// Задача 10

// Задание
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// Тесты
// Объявлен класс Car.
// Конструктор класса принимает объект со свойствами brand, model и price.
// Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
// Значение Car.prototype.getPrice это функция.
// Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
// Значение Car.prototype.changePrice это функция.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}

console.log(Car.prototype.hasOwnProperty('changePrice'));

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi.getPrice());

// Задача 11
// Приватные свойства

// Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
// Тесты
// Объявлен класс Car.
// Свойство brand в классе Car объявлено приватным.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { model: 'Murano', price: 31700 }.
// У экземпляра нет публичного свойства brand.
// Метод getBrand() возвращает значение приватного свойства brand.
// Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

audi.changeBrand('Honda');

// Задача 12

// Задание
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Storage.
// Свойство items в классе Storage объявлено приватным.
// Конструктор класса принимает свойство items.
// Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
// В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
// Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
// У объекта storage нет свойства items.
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
// Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
// Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Задача 13

// Задача. Конструктор строк 2.0
// Задание
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder.
// Свойство value в классе StringBuilder объявлено приватным.
// Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.
// В результате вызова new StringBuilder('.') значение переменной builder это объект.
// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.
// У объекта builder нет свойства value.
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.
// Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.
// Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.

class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// Задача 14

// Геттеры и сеттеры
// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить

// Задание
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// Тесты
// Объявлен класс Car.
// В классе Car объявлено приватное свойство brand.
// В классе Car объявлено приватное свойство model.
// В классе Car объявлено приватное свойство price.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В классе Car объявлен геттер brand.
// В классе Car объявлен сеттер brand.
// В классе Car объявлен геттер model.
// В классе Car объявлен сеттер model.
// В классе Car объявлен геттер price.
// В классе Car объявлен сеттер price.

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// Задача 15

// Статические свойства
// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

// Задание
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// Тесты
// Объявлен класс Car.
// У класса Car есть статическое свойство MAX_PRICE.
// Значение статического свойства MAX_PRICE это число 50000.
// У экземпляра нет свойства MAX_PRICE.
// В классе Car объявлен геттер price.
// В классе Car объявлен сеттер price.
// У экземпляра класса Car вызов сеттера price, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price.
// У экземпляра класса Car вызов сеттера price, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price.

class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) {
      return;
    }
    if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
  }
  // Пиши код выше этой строки
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// Задача 16
// Статические методы
// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того, что значением будет метод.
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

// Задание
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// Тесты
// Объявлен класс Car.
// У класса Car есть статический метод checkPrice(price).
// Вызов Car.checkPrice(36000) возвращает строку 'Всё хорошо, цена в порядке.'.
// Вызов Car.checkPrice(18000) возвращает строку 'Всё хорошо, цена в порядке.'.
// Вызов Car.checkPrice(64000) возвращает строку 'Внимание! Цена превышает допустимую.'.
// Вызов Car.checkPrice(57000) возвращает строку 'Внимание! Цена превышает допустимую.'.

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return `Внимание! Цена превышает допустимую.`;
    }
    if (price <= Car.#MAX_PRICE) {
      return `Всё хорошо, цена в порядке.`;
    }
  }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// Задача 17

// Наследование классов

// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого класса (родителя). В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.

// Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

// Например, в приложении есть пользователи разных типов - администратор, писатель статей, контент менеджер и т. п. У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

// Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов, и при необходимости изменить, например, название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.
// Важно помнить, что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.

// Задание
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.
// Тесты
// Объявлен класс Admin.
// Класс Admin наследует от класса User.
// У класса Admin есть публичное статическое свойство AccessLevel.
// Обращение к Admin.AccessLevel.BASIC возвращает строку 'basic'.
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку 'superuser'.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

console.log(Admin.AccessLevel.BASIC);

// Задача 18

// Конструктор дочернего класса
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

// Задание
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойсво accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.

// Тесты
// Объявлен класс Admin.
// Класс Admin наследует от класса User.
// У класса Admin есть публичное статическое свойство AccessLevel.
// У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}.
// У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса.
// Обращение к Admin.AccessLevel.BASIC возвращает строку 'basic'.
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку 'superuser'.
// У класса Admin есть публичное свойство accessLevel.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

// Задача 19

// Методы дочернего класса
// В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// Задание
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Admin.
// Класс Admin наследует от класса User.
// У класса Admin есть публичное свойство blacklistedEmails.
// У класса Admin есть публичный метод blacklist.
// У класса Admin есть публичный метод isBlacklisted.
// После вызова mango.blacklist('poly@mail.com') значение свойства blacklistedEmails это массив [ 'poly@mail.com' ].
// Вызов mango.isBlacklisted('mango@mail.com') возвращает false.
// Вызов mango.isBlacklisted('poly@mail.com') возвращает true.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  accessLevel;
  blacklistedEmails;

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    } else {
      return false;
    }
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true
