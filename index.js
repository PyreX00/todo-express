const express = require ("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const { v4: uuid } = require("uuid");

//middleware

app.use(bodyParser.json())

app.get("/todos", (req, res)=>{
    res.json(todos);
});





const todos = [
    {
        id:1,
        desc : "Write Python Code",
        completed : false,
    },
    {
        id:2,
        desc : "Write JS code",
        completed : false,
    },
];


app.get("/todo/:id", (req, res)=> {
    let todo = todos.find((todo)=> todo.id = req.params.id)
    res.json(todo);  
});

app.post("/todos",(req, res)=>{
    const newtodo = {
        id:uuid(),
        desc:req.body.desc,
        completed:req.body.completed||false
    };
    todos.push(newtodo);
    res.json([todos]);
});

app.put("/todo/:id",(req, res)=>{
    let todo = todos.find((todo)=> todo.id = req.params.id)
    if (todo){
        todo.desc = req.body.desc;
        todo.completed = req.body.completed;
        res.json([todos])
    } else {
        res.send("Does not exist")
    }
    res.json([todos]);
});

app.delete("/todo/:id",(req, res)=>{

    let index = todos.findIndex((todo)=> todo.id == req.params.id);
    todos.splice(index,1)
    res.json(todos);
});



app.get("/", (req,res)=>{
    res.send("TODO list home page")
});

app.listen (PORT, ()=>{
    console.log(`App is listening in port ${PORT}`)
})
