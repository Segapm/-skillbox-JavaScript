const isCard = true
const balance = 500

let money = prompt("Введите сумму банковской операции")

if (isCard && money <= balance) {
    console.log("Операция выполняется");
} 
else {
    console.log("Операция отклонена");
}

