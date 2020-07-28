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

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const questions = [
    prompt('Один из последних просмотренных фильмов?', ''),
    prompt('На сколько оцените его?', ''),
    prompt('Один из последних просмотренных фильмов?', ''),
    prompt('На сколько оцените его?', '')
];

personalMovieDB.movies[questions[0]] = questions[1];
personalMovieDB.movies[questions[2]] = questions[3];

console.log(personalMovieDB);



        
    

