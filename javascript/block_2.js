// Задача 1

// Задание
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// Тесты
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=.
// Вызов checkAge(20) возвращает 'Вы совершеннолетний человек'.
// Вызов checkAge(8) возвращает 'Вы не совершеннолетний человек'.
// Вызов checkAge(14) возвращает 'Вы не совершеннолетний человек'.
// Вызов checkAge(38) возвращает 'Вы совершеннолетний человек'.

function checkAge(age) {
  if (age >= 18) {
    // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

// Задача 2

// Проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }

  return 'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
}

// Задача 3

// Склад товаров 3.0
// Задание
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе;
// ordered - количество единиц товара в заказе.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// Тесты
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// Вызов checkStorage(70, 0) возвращает 'В заказе еще нет товаров'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 250) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// Вызов checkStorage(150, 0) возвращает 'В заказе еще нет товаров'.

function checkStorage(available, ordered) {
  // Пиши код ниже этой строки
  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  }
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  }
  return 'Заказ оформлен, с вами свяжется менеджер';
}

// Пиши код выше этой строки

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

// Задача 4

// Задание
// Объяви переменную fruits и присвой ей массив фруктов - строк 'яблоко', 'слива', 'груша' и 'апельсин'.

// Тесты
// Объявлена переменная fruits.
// Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин'].

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// Задача 5

// Задание
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива
// Тесты
// Объявлена переменная firstElement.
// Значение переменной firstElement это строка 'яблоко'.
// Объявлена переменная secondElement.
// Значение переменной secondElement это строка 'слива'.
// Объявлена переменная lastElement.
// Значение переменной lastElement это строка 'апельсин'.

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

// Задача 6

// Задание
// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

// Тесты
// Объявлена переменная fruits.
// Значение переменной fruits это массив ['яблоко', 'персик', 'груша', 'банан'].

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
fruits[1] = 'персик';
fruits[3] = 'банан';

// Задача 7

// Задание
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// Тесты
// Объявлена переменная fruitsArrayLength.
// Значение переменной fruitsArrayLength это число 4.

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const fruitsArrayLength = fruits.length;

// Задача 8

// Задание
// Объяви две перемнные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	значение последнего элемента массива
// Тесты
// Объявлена переменная lastElementIndex.
// Значение переменной lastElementIndex это число 3.
// Объявлена переменная lastElement.
// Значение переменной lastElementIndex это строка 'банан'.

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// Задача 9

// Крайние элементы массива
// Задание
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// Тесты
// Объявлена функция getExtremeElements(array).
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5].
// Вызов getExtremeElements(['Земля', 'Марс', 'Венера']) возвращает ['Земля', 'Венера'].
// Вызов getExtremeElements(['яблоко', 'персик', 'груша', 'банан']) возвращает ['яблоко', 'банан'].

function getExtremeElements(array) {
  // Пиши код ниже этой строки

  return [array[0], array[array.length - 1]];
  // Пиши код выше этой строки
}
getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(['Земля', 'Марс', 'Венера']);
getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);

// Задача 10

// Задание
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// Тесты
// Объявлена функция splitMessage(message, delimeter).
// Вызов splitMessage('Манго спешит на поезд', ' ') возвращает ['Манго', 'спешит', 'на', 'поезд'].
// Вызов splitMessage('Манго', '') возвращает ['М', 'а', 'н', 'г', 'о'].
// Вызов splitMessage('лучшее_за_неделю', '_') возвращает ['лучшее', 'за', 'неделю'].

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  words = message.split(delimeter);

  // Пиши код выше этой строки
  return words;
}
splitMessage('Манго спешит на поезд', ' ');
splitMessage('Манго', '');
splitMessage('лучшее_за_неделю', '_');

// Задача 11

// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// Тесты
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Вызов calculateEngravingPrice('JavaScript у меня в крови', 10) возвращает 50.
// Вызов calculateEngravingPrice('JavaScript у меня в крови', 20) возвращает 100.
// Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 40) возвращает 160.
// Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 20) возвращает 80.

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  let messageToArr = message.split(' ');
  let engravingPrice = messageToArr.length * pricePerWord;

  return engravingPrice;
  // Пиши код выше этой строки
}
calculateEngravingPrice('JavaScript у меня в крови', 10);
calculateEngravingPrice('JavaScript у меня в крови', 20);
calculateEngravingPrice('Веб-разработка это творческая работа', 40);
calculateEngravingPrice('Веб-разработка это творческая работа', 20);

// Задача 12

// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// Тесты
// Объявлена функция makeStringFromArray(array, delimeter).
// Вызов makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') возвращает 'Манго спешит на поезд'.
// Вызов makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '')) возвращает 'Манго'.
// Вызов makeStringFromArray(['лучшее', 'за', 'неделю'], '_') возвращает 'лучшее_за_неделю'.

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки

  string = array.join(delimeter);

  // Пиши код выше этой строки
  return string;
}
makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ');
makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '');
makeStringFromArray(['лучшее', 'за', 'неделю'], '_');

// Задача 13

// Генератор slug
// Задание
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/массивы-для-новичков.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.
// Тесты
// Объявлена функция makeStringFromArray(array, delimeter).
// Вызов slugify('Массивы для новичков') возвращает 'массивы-для-новичков'.
// Вызов slugify('Английский для разработчика') возвращает 'английский-для-разработчика'.
// Вызов slugify('Десять секретов JavaScript') возвращает 'десять-секретов-javascript'.
// Вызов slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ') возвращает 'как-стать-junior-разработчиком-за-две-недели'.

function slugify(title) {
  // Пиши код ниже этой строки

  title = title.toLowerCase().split(' ').join('-');

  return title;

  // Пиши код выше этой строки
}
slugify('Массивы для новичков');
slugify('Английский для разработчика');
slugify('Десять секретов JavaScript');
slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ');

// Задача 14

// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.
// Тесты
// Объявлена переменная fruits
// Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин', 'банан'].
// Объявлена переменная firstTwoEls
// Значение переменной firstTwoEls это массив ['яблоко', 'слива'].
// Объявлена переменная nonExtremeEls
// Значение переменной nonExtremeEls это массив ['слива', 'груша', 'апельсин'].
// Объявлена переменная lastThreeEls.
// Значение переменной lastThreeEls это массив ['груша', 'апельсин', 'банан'].
// Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

// Задача 15

// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// Тесты
// Объявлена переменная oldClients.
// Значение переменной oldClients это массив ['Манго', 'Аякс', 'Поли', 'Киви'].
// Объявлена переменная newClients.
// Значение переменной newClients это массив ['Персик', 'Хьюстон'].
// Объявлена переменная allClients.
// Значение переменной allClients это массив ['Манго', 'Аякс', 'Поли', 'Киви', 'Персик', 'Хьюстон'].
// Переменной allClients присвоен массив после применения метода concat с правильными аргументами.

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients);

// Задача 16

// Композиция массивов
// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// Тесты
// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3) возвращает ['Манго', 'Поли', 'Аякс'].
// Вызов makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4) возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// Вызов makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3) возвращает ['Манго', 'Аякс', 'Челси'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2) возвращает ['Земля', 'Юпитер'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4) возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0) возвращает [].
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив.

function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки
  let newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
  // Пиши код выше этой строки
}
makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);
makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0);

// Задача 17

// Задание
// Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне от start до end включительно. Дополни тело функции так, чтобы она работала правильно.

// Тесты
// Объявлена переменная start.
// Значение переменной start это число 3.
// Объявлена переменная end.
// Значение переменной end это число 7.
// Объявлена переменная i - счётчик цикла.
// Начальное значение переменной i равно 3.
// Условие цикла приводится к true до тех пор, пока i меньше либо равно 7.
// На каждой итерации значение переменной i увеличивается на единицу.
// Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7.

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Дополни эту строку
  console.log(i);
}

// Задача 18

// Сумма чисел (цикл for)
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// Тесты
// Объявлена функция calculateTotal(number).
// Вызов функции calculateTotal(1) возвращает 1.
// Вызов функции calculateTotal(3) возвращает 6.
// Вызов функции calculateTotal(7) возвращает 28.
// Вызов функции calculateTotal(18) возвращает 171.
// Вызов функции calculateTotal(24) возвращает 300.
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение.

function calculateTotal(number) {
  // Пиши код ниже этой строки
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
  // Пиши код выше этой строки
}

calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);
calculateTotal();

// Задача 19

// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// Тесты
// Объявлена переменная fruits.
// Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин'].
// Объявлена переменная i - счётчик цикла.
// Начальное значение переменной i равно 0.
// Условие цикла приводится к true до тех пор, пока i меньше 4.
// На каждой итерации значение переменной i увеличивается на единицу.
// В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива.
// В теле цикла for используется вывод в консоль переменной fruit.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) {
  // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

// Задача 20

// Подсчёт суммы покупки
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение.

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Пиши код выше этой строки
  return total;
}
calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

// Задача 21

// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Задача 22

// Задание
// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Тесты
// Объявлена функция createArrayOfNumbers(min, max).
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3].
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17].
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34].
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив.
// В цикле for использовался метод push.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Пиши код выше этой строки
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));

// Задача 23

// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// Тесты
// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// В цикле for использовался метод push.

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (let number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
  // Пиши код выше этой строки
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

// Задача 24

// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.
// Вызов checkFruit('груша') возвращает true.
// Вызов checkFruit('Груша') возвращает false.
// Вызов checkFruit('яблоко') возвращает true.
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean.
// В функции использовался метод includes.

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}

// Задача 25

// Общие элементы
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив.
// В цикле for использовались методы includes и push.

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (let elements2 of array1) {
    if (array2.includes(elements2)) {
      newArray.push(elements2);
    }
  }
  return newArray;
  // Пиши код выше этой строки
}

// Задача 26

// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму.

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (let orders of order) {
    total += orders;
  }

  // Пиши код выше этой строки
  return total;
}

// Задача 27

// Фильтрация массива чисел 2.0
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Тесты
// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// Функция calculateTotalPrice() использует цикл for..of.

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}

// Задача 28

// Задание
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// Тесты
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// Задача 29

// Чётные числа
// Проверка на четность

// function isEven (num) {
//   return num % 2 === 0;
// }

// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// Тесты
// Объявлена функция getEvenNumbers(start, end).
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
// Вызов функции getEvenNumbers(8, 8) возвращает [8].
// Вызов функции getEvenNumbers(7, 7) возвращает [].
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let newArr = [];
  for (start; start <= end; start += 1) {
    if (start % 2 === 0) {
      newArr.push(start);
    }
  }
  return newArr;

  // Пиши код выше этой строки
}
console.log(getEvenNumbers(2, 5));

// Задача 30

// Оператор break
// Прервать выполнение цикла можно в любой момент. Для этого сущестует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

// В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log('Нашли число 3, прерываем выполнение цикла');
    break;
  }
}

// console.log('Лог после цикла');

// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// Тесты
// Объявлена переменная start со значением 6.
// Объявлена переменная end со значением 27.
// Объявлена переменная number без инициализации.
// Итоговое значение переменной number равно 10.
// В цикле for используется break для выхода до завершения всех итераций цикла.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// Задача 31

// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.
// Тесты
// Объявлена функция findNumber(start, end, divisor).
// Вызов findNumber(2, 6, 5) возвращает 5.
// Вызов findNumber(8, 17, 3) возвращает 9.
// Вызов findNumber(6, 9, 4) возвращает 8.
// Вызов findNumber(16, 35, 7) возвращает 21.
// Вызов findNumber() со случайным набором чисел возвращает верный результат.
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла.

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return i;
  // Пиши код выше этой строки
}

// Задача 32

// Функция includes()
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Тесты
// Объявлена функция includes(array, value).
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') возвращает true.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') возвращает false.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива') возвращает true.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') возвращает false.
// Вызов includes() для случайного массива со случайным value  возвращает верный boolean.
// В функции includes используется for, return, но не метод массива includes.

function includes(array, value) {
  // Пиши код ниже этой строки

  for (let items of array) {
    if (items === value) {
      return true;
    }
  }
  return false;
  // Пиши код выше этой строки
}
