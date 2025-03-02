import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const { username, email, password, number } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.redirect('/signup');  // Fix: Redirect directly
        }

        // Fix: Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({ username:username,email:email, password: hashedPassword,number: number });

        await user.save();
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;  // Fix: Use email instead of username

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send("Invalid email or password");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Invalid email or password");
        }

        req.session.user = user;  // Save user in session
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

export default router;
