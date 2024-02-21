let phone = [
    {
        id: 1,
        brand: "Samsung",
        name: "Galaxy 24",
        price: 800
    },
    {
        id: 2,
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        price: 1300
    },
    {
        id: 3,
        brand: "Xiaomi",
        name: "Redmi Note 13 Pro",
        price: 340
    },
]

const newPhone = {
    id: 4,
    brand: "Xiaomi",
    name: "Poco X6 Pro",
    price: 370
}

function AddPhone(newItem) {
    phone.push(newItem);
    return phone;
}

function UpdatePhone(id, newPrice) {
    const selectedPhone = phone.find((item) => (item.id === id));
    selectedPhone.price = newPrice;
    return phone;
}

function DeletePhone(id) {
    const selectedPhone = phone.find((item) => (item.id === id));
    phone.splice(phone.indexOf(selectedPhone), 1);
    return phone;
}

console.log(phone);
console.log(AddPhone(newPhone));
console.log(UpdatePhone(2, 1320));
console.log(DeletePhone(3));