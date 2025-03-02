import express from "express";
import mongoose from "mongoose";
import path from "path";
import authroutes from './routes/authroutes.js';
import session from "express-session";
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/local");
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Exit the process if DB connection fails
    }
};
connectDB();
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("assets"));
app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.use('/',authroutes);

app.use(session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  
}));

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
};
app.get('/dashboard',(req,res)=>
{
    res.render('dash.ejs');
})
app.listen(port, () => {
    console.log("Server started on port 3000");
}) 