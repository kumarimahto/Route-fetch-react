const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./users');

// console.log(users);
const app = express(); // this is a express app
let PORT = 3000;
// Middleware = > Jo ki beech me chalta hai between request and response, cors body parser, validations , authentication, debugging, etc.
// cors se block kese karte hain

app.use(cors({
    origin:
        "http://localhost:5173"

}));
const loggerfn = (req, res, next) => {
    console.log("Request received at:", req.url);
    next() // next() is used to pass control to the next middleware function
}
app.use(loggerfn)

// let users = {
//     1: { name: 'John', age: 30 },
//     2: { name: 'Jane', age: 25 }
// }

// GET POST PUT DELETE                   -    ----- -        PATCH OPTIONS HEAD
// req => request ==> frontent to backend from client
// res => response = > from server to client
app.get('/', (req, res) => {
    res.send(users);
});
// json.stringify(users) json.parse()
// rwq > middleware > res

app.use(bodyParser.json());

app.post("/", (req, res) => {
    console.log(req.body)

    const { first_name, email, last_name } = req.body;
    console.log(first_name, email, last_name);
    users.data.push({ id: users.data.length + 1, first_name, email, last_name });
    console.log(users.data.length);
    res.send(users.data);


})



app.get("/users/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const user = users.data.find(u => u.id === parseInt(id));
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: "User not found" });
    }

}
);
// http: create server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//http://localhost:3000/