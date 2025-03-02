const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    breed: String,
    confidence: String,
    imageUrl: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Dog", DogSchema);
