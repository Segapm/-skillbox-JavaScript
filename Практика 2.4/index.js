const currentYear = 2024

let userName = prompt("Введите имя")
let year = prompt("Введите год рождения")
let index = 1
let age1 = currentYear - year

console.log(index, userName, age1);

userName = prompt("Введите имя")
year = prompt("Введите год рождения")
index++
let age2 = currentYear - year

console.log(index, userName, age1);

userName = prompt("Введите имя")
year = prompt("Введите год рождения")
index++
let age3 = currentYear - year

console.log(index, userName, age3);

avgAge = (age1 + age2 + age3) / 3
console.log("Средний возраст пользователей", avgAge);