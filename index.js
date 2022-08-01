const express = require('express');
const app= express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/userID/:id/userAge/:age",(req,res)=>{
//     const id= req.params.id;
//     const age= req.params.age;
//     res.send(`<h1>Student ID is ${id}, Age is ${age}</h1>`);
// });

// app.get("/",(req,res)=>{
//     const id = req.header('id');
//     const name = req.header('name');
//     res.send(`<h1>Student ID is ${id}, name is ${name}</h1>`);
// });
app.post("/user",(req,res)=>{
    const name= req.body.name;
    res.send(`Welcome ${name}`);
});


app.listen(PORT, ()=>{
    console.log(`Server is runing at http://localhost:${PORT}`);
});