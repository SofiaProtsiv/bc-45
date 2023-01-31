'use strict';
/*
* Архітектура клієнт-сервер і модель запит-відповідь
* Протоколи передачі даних: HTTP та HTTPS
* REST API (бекенд)
* Публічний REST 
* «AJAX» (абревіатура від Asynchronous JavaScript And XML) 
* Fetch API
* Cross-Origin Resource Sharing (CORS) https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS?retiredLocale=uk
*/

// Базовий синтаксис FETCH:
// let promise = fetch(url, [options])
// url – URL для надсилання запиту.
// options – додаткові параметри: метод, заголовки тощо.

// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// let fetchPosts = fetch(`${BASE_URL}/posts`)
// console.log(fetchPosts)

// fetchPosts
// .then(response => {
//     if (response.ok) {
//         return response.json()
//     }
//     throw new Error("not found")
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))

//? TASK 01
// Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.

// Важливі деталі:
// На кожного користувача повинен бути один запит fetch.
// Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше.
// Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о користувачеві немає, то функція повина повертати null в масиві результатів .

const BASE_URL = 'https://api.github.com/users';

const userLogins = [
    'luxplanjay',
    'SofiaProtsiv',
    'qweeqer',
    'Maxwelllife',
    'xWinst',
    'AleksZhov',
    'gsmoff',
];

const getUsers = names => {
   const promises = names.map(name => {
        return fetch(`${BASE_URL}/${name}`).then(res => {
            if(res.ok){
                return res.json()
            }
            throw new Error("null")
        })
    })

    return Promise.all(promises)
};

// console.log(getUsers(userLogins))

getUsers(userLogins)
.then(res => console.log(res))
.catch(error => console.log(error))