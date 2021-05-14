// Задача 13

// Задание
// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// Тесты
// Объявлена функция isAdult(age).
// В выражении проверки используется оператор >=.
// Вызов isAdult(20) возвращает true.
// Вызов isAdult(14) возвращает false.
// Вызов isAdult(8) возвращает false.
// Вызов isAdult(37) возвращает true.

function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = age >= 18;

  // Пиши код выше этой строки
  return passed;
}
isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);

// Задача 14
// Задание
// Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль `true` или `false`. Переменная `SAVED_PASSWORD` хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр `password`.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Тесты
// Объявлена функция isValidPassword(password).
// В выражении проверки паролей использован оператор ===.
// Вызов isValidPassword('mangodab3st') возвращает false.
// Вызов isValidPassword('kiwirul3z') возвращает false.
// Вызов isValidPassword('jqueryismyjam') возвращает true.

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = password === SAVED_PASSWORD;

  // Пиши код выше этой строки
  return isMatch;
}

// Задача 15
// Задание
// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка 'Вы совершеннолетний человек'.
// В противном случае должен выполняться блок else и записывается строка 'Вы не совершеннолетний человек'.
// Тесты
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=.
// Вызов checkAge(20) возвращает 'Вы совершеннолетний человек'.
// Вызов checkAge(8) возвращает 'Вы не совершеннолетний человек'.
// Вызов checkAge(14) возвращает 'Вы не совершеннолетний человек'.
// Вызов checkAge(38) возвращает 'Вы совершеннолетний человек'.

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Дополни эту строку
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

//Задача 16

// Задача: склад товаров
// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'На складе недостаточно товаров!'.
// В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.
// Тесты
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered > available) {
    message = 'На складе недостаточно товаров!';
  } else message = 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 150);
checkStorage(150, 180);

// Задача 17
// Задание
// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// Тесты
// Значение переменной a равно 7.
// Использован оператор +=.
// Значение переменной b равно 6.
// Использован оператор -=.
// Значение переменной c равно 45.
// Использован оператор *=.
// Значение переменной d равно 2.
// Использован оператор /=.

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Пиши код ниже этой строки
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Задача 18
// Задание
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.
// Тесты
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
// Вызов makeTransaction(3000, 5, 23000) возвращает 'Вы купили 5 дроидов, на счету осталось 8000 кредитов'.
// Вызов makeTransaction(1000, 3, 15000) возвращает 'Вы купили 3 дроидов, на счету осталось 12000 кредитов'.
// Вызов makeTransaction(5000, 10, 8000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(2000, 8, 10000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(500, 10, 5000) возвращает 'Вы купили 10 дроидов, на счету осталось 0 кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   let totalPrice = orderedQuantity * pricePerDroid;
// if (totalPrice > customerCredits) {
//   message = 'Недостаточно средств на счету!';
// } else {
//   customerCredits -= totalPrice;
//   message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
// }
//   // Пиши код выше этой строки
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// Задача 19

// Задание
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password == null) {
    // Дополни эту строку
    message = 'Отменено пользователем!';
  } else if (password == ADMIN_PASSWORD) {
    // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}
checkPassword('mangohackzor');
checkPassword(null);
checkPassword('polyhax');
checkPassword('jqueryismyjam');

// Задача 20

// Задача: склад товаров 2.0
// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка В заказе еще нет товаров.
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.
// Тесты
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// Вызов checkStorage(70, 0)возвращает 'В заказе еще нет товаров'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 250) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// Вызов checkStorage(150, 0) возвращает 'В заказе еще нет товаров'.

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered == 0) {
    message = 'В заказе еще нет товаров';
  } else if (ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  // Пиши код выше этой строки
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 250);
checkStorage(150, 0);

// Задача 21

// Задание
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция isNumberInRange(start, end, number).
// В выражении проверки использован оператор &&.
// Вызов isNumberInRange(10, 30, 17) возвращает true.
// Вызов isNumberInRange(10, 30, 5) возвращает false.
// Вызов isNumberInRange(20, 50, 24) возвращает true.
// Вызов isNumberInRange(20, 50, 76) возвращает false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // дополни эту строку

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// Задача 22

// Задание
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция checkIfCanAccessContent(subType).
// В выражении проверки использован оператор ||.
// Вызов checkIfCanAccessContent('pro') возвращает true.
// Вызов checkIfCanAccessContent('starter') возвращает false.
// Вызов checkIfCanAccessContent('vip') возвращает true.
// Вызов checkIfCanAccessContent('free') возвращает false.

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

  return canAccessContent;
}
checkIfCanAccessContent('pro');
checkIfCanAccessContent('starter');
checkIfCanAccessContent('vip');
checkIfCanAccessContent('free');

// Задача 23

// Задание
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Тесты
// Объявлена функция isNumberNotInRange(start, end, number).
// В выражении использован оператор !.
// Вызов isNumberNotInRange(10, 30, 17) возвращает false.
// Вызов isNumberNotInRange(10, 30, 5) возвращает true.
// Вызов isNumberNotInRange(20, 50, 24) возвращает false.
// Вызов isNumberNotInRange(20, 50, 76) возвращает true.

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку

  return isNotInRange;
}
isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);

// Задача 24

// Задача: расчёт скидки
// Задание
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// Тесты
// Объявлена функция getDiscount(totalSpent).
// Вызов getDiscount(137000) возвращает 0.1.
// Вызов getDiscount(46900) возвращает 0.05.
// Вызов getDiscount(8250) возвращает 0.02.
// Вызов getDiscount(1300) возвращает 0.
// Вызов getDiscount(5000) возвращает 0.02.
// Вызов getDiscount(20000) возвращает 0.05.
// Вызов getDiscount(50000) возвращает 0.1.

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  // Пиши код выше этой строки
  return discount;
}
getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);

// Задача 25

// Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// Тесты
// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message =
    ordered > available
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  // Пиши код выше этой строки
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);

// Задача 26
// Задача: проверка пароля
// Задание
// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещён, неверный пароль!'.
// Тесты
// Объявлена функция checkPassword(password).
// Использован тернарный оператор.
// Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.
// Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещён, неверный пароль!'.
// Вызов checkPassword('r3actsux') возвращает 'Доступ запрещён, неверный пароль!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
  message =
    password == ADMIN_PASSWORD
      ? 'Доступ разрешен'
      : 'Доступ запрещён, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}
checkPassword('jqueryismyjam');
checkPassword('angul4r1sl1f3');
checkPassword('r3actsux');

// Задача 27

// Задание
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === 'starter') {
  price = 0;
} else if (type === 'professional') {
  price = 20;
} else if (type === 'organization') {
  price = 50;
}
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// Тесты
// Объявлена функция getSubscriptionPrice(type).
// Вызов getSubscriptionPrice('professional') возвращает число 20.
// Вызов getSubscriptionPrice('organization') возвращает число 50.
// Вызов getSubscriptionPrice('starter') возвращает число 0.

function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

  switch (
    type // Дополни эту строку
  ) {
    case 'starter': // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}
getSubscriptionPrice('professional');
getSubscriptionPrice('organization');
getSubscriptionPrice('starter');

// Задача 28

// Задание
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;

    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;

    default:
      message = 'Доступ запрещён, неверный пароль!';
  }

  return message;
}
checkPassword('mangohackzor');
checkPassword('polyhax');
checkPassword('jqueryismyjam');

//Задача 29

// Задание
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// Тесты
// Объявлена функция getShippingCost(country).
// В теле функции использована инструкция switch.
// Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
// Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
// Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
// Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
// Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
// Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.

function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  let shippingCost;
  switch (country) {
    case 'Китай':
      message = 'Доставка в Китай будет стоить 100 кредитов';
      break;

    case 'Чили':
      message = 'Доставка в Чили будет стоить 250 кредитов';
      break;

    case 'Австралия':
      message = 'Доставка в Австралия будет стоить 170 кредитов';
      break;

    case 'Ямайка':
      message = 'Доставка в Ямайка будет стоить 120 кредитов';
      break;

    default:
      message = 'Извините, в вашу страну доставки нет';
  }
  // Пиши код выше этой строки
  return message;
}
getShippingCost('Австралия');
getShippingCost('Германия');
getShippingCost('Китай');
getShippingCost('Чили');
getShippingCost('Ямайка');
getShippingCost('Швеция');

// Задача 30

// Задание
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной сроки из параметра name.

// Тесты
// Объявлена функция getNameLength(name).
// Вызов функции getNameLength('Poly') возвращает 'Длина вашего имени 4 символа(ов)'.
// Вызов функции getNameLength('Harambe') возвращает 'Длина вашего имени 6 символа(ов)'.
// Вызов функции getNameLength('Billy') возвращает 'Длина вашего имени 5 символа(ов)'.
// Вызов функции getNameLength('Joe') возвращает 'Длина вашего имени 3 символа(ов)'.

function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}
getNameLength('Poly');
getNameLength('Harambe');
getNameLength('Billy');
getNameLength('Joe');

// Задача 31

// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// Тесты
// Объявлена переменная courseTopic.
// Значение переменной courseTopic это строка 'JavaSript для начинающих'.
// Объявлена переменная courseTopicLength.
// Значение переменной courseTopicLength это число 24.
// Объявлена переменная firstElement.
// Значение переменной firstElement это строка 'J'.
// Объявлена переменная lastElement.
// Значение переменной lastElement это строка 'х'.

const courseTopic = 'JavaSript для начинающих';

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Задача 32

// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Тесты
// Объявлена функция getSubstring(string, length).
// Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
// Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
// Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
// Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
// Вызов функции getSubstring('Привет мир', 0) возвращает ''.

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Дополни эту строку

  return substring;
}
getSubstring('Привет мир', 3);
getSubstring('Привет мир', 6);
getSubstring('Привет мир', 8);
getSubstring('Привет мир', 10);
getSubstring('Привет мир', 0);

// Задача 33

// Задание
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.
// Тесты
// Объявлена функция formatMessage(message, maxLength).
// Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
// Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.

function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки

  if (message.length > maxLength) {
    result = `${message.slice(0, maxLength)}...`;
  } else {
    result = message;
  }
  // Пиши код выше этой строки
  return result;
}
formatMessage('Curabitur ligula sapien', 16);
formatMessage('Curabitur ligula sapien', 23);
formatMessage('Vestibulum facilisis purus nec', 20);
formatMessage('Vestibulum facilisis purus nec', 30);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// Задача 34

// Задание
// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// Тесты
// Объявлена функция normalizeInput(input).
// Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
// Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
// Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}

// Задача 35

// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Тесты
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
// Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
// Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
  return result;
}

// Задача 36

// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещённых слов, функция возвращает буль false.
// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam('Latest technology news') возвращает false.
// Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  message = message.toLowerCase();

  if (message.includes('spam')) {
    result = true;
  } else if (message.includes('sale')) {
    result = true;
  } else result = false;

  // Пиши код выше этой строки
  return result;
}
checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('Trust me, this is not a spam message');
checkForSpam('Get rid of sPaM emails. Our book in on sale!');
checkForSpam('[SPAM] How to earn fast money?');
