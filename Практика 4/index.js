//Задание 1
function doAvg(a, b, c) {
    return average = (a + b + c) / 3
}

console.log(doAvg(1, 2, 3));  
console.log(doAvg(2,3,4));  
console.log(doAvg(3,4,5)); 

//Задание 2
const celsiusToFahrenheit = function(C) {            //Из градусов Цельсия в градусы Фаренгейта
    return F = C * 1.8 + 32
}
const fahrenheitToCelsius = function(F) {            //Из градусов Фаренгейта в градусы Цельсия  
    return C = (F - 32) / 1.8 
}

console.log(celsiusToFahrenheit(30));
console.log(celsiusToFahrenheit(100));

console.log(fahrenheitToCelsius(100));
console.log(fahrenheitToCelsius(150));

//Задание 3
const celsiusToFahrenheit2 = (C) => {return F = C * 1.8 + 32}

console.log(celsiusToFahrenheit2(30));
console.log(celsiusToFahrenheit2(100));

const fahrenheitToCelsius2 = (F) => {return C = (F - 32) / 1.8}

console.log(fahrenheitToCelsius2(100));
console.log(fahrenheitToCelsius2(150));

//Задание 4
const count = 3;

function countPlusOne(count){
    console.log(count + 1);
}

countPlusOne(count);

//Задание 5
const priceItem = 25000
const discountItem = 20
const amountItem = 3

function totalSum(priceItem, amountItem, discountItem) {
    return (priceItem * amountItem) - (priceItem * amountItem * discountItem / 100)
}

console.log(totalSum(priceItem, amountItem, discountItem));