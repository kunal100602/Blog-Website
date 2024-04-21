const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/Blogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
            console.log('db connected');
})
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username:String,
    email: String,
    password: String,
});

const userSchema1 = new mongoose.Schema({
    title:String,
    about: String,
    img:String
});

const Register = mongoose.model('Register', userSchema);

const Blogs = mongoose.model('Blogs',userSchema1);

const app = express();

app.use(cors());
app.use(BodyParser.json());

app.post('/register', async(req, res) => {
    const register = new Register();
    register.username = req.body.username;
    register.email = req.body.email;
    register.password = req.body.password;
    const doc = await register.save();
    res.json(doc);
})

app.get('/show', async (req,res)=> {
    const docs = await Register.find({});
    res.json(docs);
})

app.post('/blogs', async (req, res) => {
    const blog = new Blogs;
    blog.title = req.body.title;
    blog.about = req.body.about;
    blog.img = req.body.img;
    const doc = await blog.save();
    console.log(doc);
    res.json(doc);
})

app.get('/blogs', async(req,res)=> {
    const docs = await Blogs.find({});
    res.json(docs);
})

app.listen('5000', () => {
    console.log('active');
})