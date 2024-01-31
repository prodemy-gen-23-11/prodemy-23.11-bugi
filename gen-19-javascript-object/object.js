let phone = {
    brand: "Samsung",
    name: "Galaxy S24",
    price: 780,
    spec: {
        ram: 8,
        rom: 128
    }
}

console.log("Old phone details: ")
console.log(phone);

const prompt = require('prompt-sync')();
phone.price = prompt("Insert new phone price: ");
console.log("New phone price: ", phone.price);

console.log("New phone details: ")
console.log(phone);