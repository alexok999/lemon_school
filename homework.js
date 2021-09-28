// ЗАДАЧА 1
// проверка диапазона
let age = 91;

if (age >=14 && age <= 90){
    console.log('Вы в диапазоне');    
} else {
    console.log('не подходите по возрасту');
}

////////////////////////////////////////////////////////
// ЗАДАЧА 2
// проверка вне диапазона c использованием !

let age2 = 16;
if (!(age2 >= 14 && age2 <= 90)){
    console.log('Вы в диапазоне');    
} else {
    console.log('не подходите по возрасту');
}


// проверка вне диапазона c использованием без использования !
let age3 = 1;
if (age2 <= 14 || age2 >= 90){
    console.log('Вы в диапазоне');    
} else {
    console.log('не подходите по возрасту');
}
////////////////////////////////////////////////////////
// ЗАДАЧА 3
// Переписать if в ?


let result;
let a = 1;
let b = 2;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

 
/// РЕШЕНИЕ

let c = 1;
let d = 2;
let result2 = (c + d < 4) ? true : false;
console.log(result2);

////////////////////////////////////////////////////////
// ЗАДАЧА 4
// Переписать if..esle в ?

let message;
let login;
if(login == 'Сотрудник') {
    message = 'Привет';
} else if(login == 'Директор') {
    message = 'Здравствуйте!';
} else if(login == 'Нет логина') {
    message = 'Нет логина';
} else{
    message = '';
}



/// РЕШЕНИЕ


let login2;
let message2 = (login2 == 'Сотрудник') ? 'Hello sotrudnik' 
: (login2 == 'Director') ? 'hello director' 
: (login2 == 'no login') ? 'no login sorry' 
: (login2 == ''); // если эту строку  (login2 == '') ? 'Пока'; - будешь ошибка



////////////////////////////////////////////////////////
// ЗАДАЧА 5
// Напишите код который будет спрашивать логин с помощью prompt



// let user = prompt('Какой ваш логин?');

// if (user == 'admin'){
//     let password = prompt('Your password?');
//     if (password == '123'){
//         alert('hello admin');
//     } else if(password == '' || password == null){
//         alert('you are not admin');
//     } else {
//         alert('invalid password');
//     }
    
// } else if (user == '' || user == null){
//     alert('Отменено');
    
  
// } else{
//     alert('Я вас не знаю');
// }


////////////////////////////////////////////////////////
// ЗАДАЧА 6
// Напишите if аналогичный switch
// let browser;

// switch (browser){
//     case 'Edge':
//     alert('You have got the Edge');
//     break;

//     case 'Chrome' : case 'Firefox' : case 'Safari' : case 'Opera' :
//         alert('Okay we support this browsers too');
//         break;
    
//     default:
//         alert('we hope this page looks like a cat');
// }

/// РЕШЕНИЕ

// let yourBrowser = prompt('Какой у тебя браузер?');
// if (yourBrowser == 'Edge'){
//     alert('You have got the Edge');
// } else if (yourBrowser == 'Chrome' || yourBrowser == 'Firefox' || yourBrowser == 'Safari' || yourBrowser == 'Opera'){
//     alert('Okay we support this browsers too');

// } else {
//     alert('we hope this page looks like a cat');
// }



////////////////////////////////////////////////////////
// ЗАДАЧА 7
// Переписать условия с if на switch
//  const number = +prompt('Введите число между 0 и 3', '');
//  if (number === 0){
//      alert('Вы ввели число 0')
//  }

//  if (number === 1){
//     alert('Вы ввели число 1')
// }
// if (number === 2 || number === 3){
//     alert('Вы ввели число 2,а может и 3');
// }


/// РЕШЕНИЕ
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2 или 3');
        break;
}

