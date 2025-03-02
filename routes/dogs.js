const express = require("express");
const router = express.Router();
const Dog = require("../models/Dog");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer Storage (Temporary Storage Before Uploading to Cloudinary)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 📌 Fetch All Dog Data from MongoDB
router.get("/", async (req, res) => {
    try {
        const dogs = await Dog.find().sort({ timestamp: -1 });
        res.json(dogs);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// 📌 Upload Image to Cloudinary and Save Dog Info to MongoDB
router.post("/upload", upload.single("image"), async (req, res) => {
    try {
        const { breed, confidence } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "No image uploaded" });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
            if (error) return res.status(500).json({ error: "Cloudinary Upload Failed" });

            // Save to MongoDB
            const newDog = new Dog({
                breed,
                confidence,
                imageUrl: result.secure_url
            });

            await newDog.save();
            res.json({ success: true, message: "Uploaded successfully", dog: newDog });
        });

        req.file.stream.pipe(result);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
