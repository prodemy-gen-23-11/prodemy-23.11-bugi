axios
    .get("https://dummyjson.com/products")
    .then((response) => {
        console.log("products:", response.data.products);
    })
    .catch((error) => console.log(error));

async function getUsers() {
    try {
        const response = await axios.get("https://dummyjson.com/users");
        console.log("users:", response.data.users);
    } catch (error) {
        console.log(error);
    }
};

getUsers();