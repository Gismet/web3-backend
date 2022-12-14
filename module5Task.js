const express = require("express");
const app = express();

let employees = [
    { id: 1, name: "John", age: 32 },
    { id: 2, name: "Bob", age: 28 },
    { id: 3, name: "Smith", age: 23 }
]

app.get('/', (request, response) => {
    response.send(employees)
})

app.get('/:id', (request, response) => {
    response.send(employees.find(employee => employee.id == request.params.id[1]));
})


app.listen(3000, function () {
    console.log("Sever is up");
})