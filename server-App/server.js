
var express = require('express');
var cors = require('cors');
const mongoosed = require("mongoose");

// created object of express app
var app = express();

// enabled cores globally
app.use(cors());

const connectionString = "mongodb://127.0.0.1:27017/CriminalRecords";

const criminalSchema = new mongoosed.Schema({
    fristName: String,
    lastName: String,
})


const criminalsCollObj = mongoosed.model("Criminals", criminalSchema)

app.get('/', async (req, res) => {

// const mongoose = mongoosed.connect(connectionString);
//     mongoose.then(() => {
//         console.log("Connected to the database!");
//     })
//         .catch(err => {
//             console.log("Cannot connect to the database!", err);
//             process.exit();
//         });

    criminalsCollObj.create({ fristName: 'Abc', lastName:'def' }).then(() => { });
    const housesss = await criminalsCollObj.find({});
    res.json(housesss);
});
//The above code is how I can search the properties of the criminals in db.
//const housesss = await criminalsCollObj.find({}); when u add props in this then it will serach that specifically


app.get('/posts', async (req, res) => {

    // getting query from request
    const { query } = req;
    debugger;
   

    if (query.search) {
        posts = posts.filter(x => x.title.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
    }
    res.json(posts);
});


app.listen(4400, () => {
    console.log('Server has been started on port 4400');
});