const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//parse application
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const myConnectionString = 'mongodb+srv://admin:Zqb9Yc$8@cluster0.rs9rk.mongodb.net/games?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

var gameSchema = new Schema({
    title:String,
    year:String,
    genre:String,
    cover:String,
    review:String
});

var GameModel = mongoose.model("game", gameSchema);

app.get('/api/games', (req, res)=>{
    GameModel.find((err, data)=>{
        res.json(data);
    })
});

//listen for get request from localhost:4000/api/games/id, will return game if it has that id
app.get('/api/games/:id', (req, res)=>{
    console.log(req.params.id);

    GameModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

app.delete('/api/games/:id',(req,res)=>{
    console.log("Delete Movie: "+req.params.id);

    GameModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

app.post('/api/games', (req, res)=>{
    console.log('Game Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.genre);
    console.log(req.body.cover);
    console.log(req.body.review);

    GameModel.create({
        title:req.body.title,
        year:req.body.year,
        genre:req.body.genre,
        cover:req.body.cover,
        review:req.body.review
    })

    res.send('Game Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})