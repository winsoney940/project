"use strict";



// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     name: "Ivan",
//     age: 20,
//     isMarried: false
// };

// // console.log(obj.age);
// console.log(obj["age"]);



// let arr = ['Mister.png', 'Lady.jpg', 10];
// console.log(arr[0]);

// const result = confirm("Are you here?");

// const result = +prompt("Вам есть 18?", "Отвечайте");
// console.log(result + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 === 8);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || !isClose);

// console.log(2 + 2 * 2 !== '6');

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const questions = [
//     prompt('Один из последних просмотренных фильмов?', ''),
//     prompt('На сколько оцените его?', ''),
//     prompt('Один из последних просмотренных фильмов?', ''),
//     prompt('На сколько оцените его?', '')
// ];

// personalMovieDB.movies[questions[0]] = questions[1];
// personalMovieDB.movies[questions[2]] = questions[3];

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('No');
// }


// const num = 50;

// if (num < 49) {
//     console.log('False');
// } else if (num > 100) {
//     console.log('Too many');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 51:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }
        
// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




// const questions = [
//     prompt('Один из последних просмотренных фильмов?', ''),
//     prompt('На сколько оцените его?', ''),
//     prompt('Один из последних просмотренных фильмов?', ''),
//     prompt('На сколько оцените его?', '')
// ];

// personalMovieDB.movies[questions[0]] = questions[1];
// personalMovieDB.movies[questions[2]] = questions[3];

function rememberMyFilms() {
    for (let i = 0; i < 2; i ++) {
        const questions = [
            prompt('Один из последних просмотренных фильмов?', ''),
            prompt('На сколько оцените его?', ''),
        ];
        if (questions[0] != null && questions[1] != null && questions[0] != '' && questions[1] != '' && questions[0].length < 50) {
            personalMovieDB.movies[questions[0]] = questions[1];
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();






// let i = 0;
// while (i < 2) {
//     const questions = [
//         prompt('Один из последних просмотренных фильмов?', ''),
//         prompt('На сколько оцените его?', ''),
//     ];
//     i++;
//     if (questions[0] != null && questions[1] != null && questions[0] != '' && questions[1] != '' && questions[0].length < 50) {
//         personalMovieDB.movies[questions[0]] = questions[1];
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// let i = 0;
// do {
//     const questions = [
//                 prompt('Один из последних просмотренных фильмов?', ''),
//                 prompt('На сколько оцените его?', ''),
//             ];
//             i++;
//             if (questions[0] != null && questions[1] != null && questions[0] != '' && questions[1] != '' && questions[0].length < 50) {
//                 personalMovieDB.movies[questions[0]] = questions[1];
//                 console.log('Done');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
// } while (i < 2);


function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count.length != "") {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("It's private");
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(5, 6));
// console.log(calc(6, 7));

// function ret() {
//     let num = 50;
//     return num;
// }

// // function declaration

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// function expression

// logger();

// const calc = (a, b) => a + b ;

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// const str = "test";
// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 3));

// const hm = 12.2;
// console.log(Math.round(hm));

// const wood = "12.2px";
// console.log(parseInt(wood));
// console.log(parseFloat(wood));





