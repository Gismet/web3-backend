const express = require("express");
const app = express();

let products = [
    { id: 1, title: "Product1", isInStock: true, price: 200 },
    { id: 2, title: "Product2", isInStock: true, price: 200 },
    { id: 3, title: "Product3", isInStock: true, price: 200 },
    { id: 4, title: "Product1", isInStock: true, price: 200 },
    { id: 5, title: "Product2", isInStock: true, price: 200 },
    { id: 6, title: "Product3", isInStock: true, price: 200 },
    { id: 7, title: "Product1", isInStock: true, price: 200 },
    { id: 8, title: "Product2", isInStock: true, price: 200 },
    { id: 9, title: "Product3", isInStock: true, price: 200 },
    { id: 10, title: "Product3", isInStock: true, price: 200 }
]

app.get('/', (request, response) => {
    response.send(products)
})

app.get('/:id', (request, response) => {
    response.send(products.find(product => product.id == request.params.id[1]));
})


app.listen(3000, function () {
    console.log("Sever is up");
})