// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt("Введите товар") // Название товара 1
let price1 = prompt("Введите цену") // Стоимость товара  1
let count1 = prompt("Введите количество") // Количесто товара 1

console.log(product1, price1 * count1) // Вывод в консоль

let product2 = prompt("Введите второй товар") // Название товара 2
let price2 = prompt("Введите цену")  // Стоимость товара  2
let count2 = prompt("Введите количество") // Количесто товара 2

console.log(product2, price2 * count2) // Вывод в консоль

let product3 = prompt("Введите третий товар") // Название товара 3
let price3 = prompt("Введите цену") // Стоимость товара  3
let count3 = prompt("Введите количество") // Количесто товара 3

console.log(product3, price3 * count3) // Вывод в консоль

console.log("Стоимость всей покупки:", price1 * count1 + price2 * count2 + price3 * count3) // Вывод в консоль
