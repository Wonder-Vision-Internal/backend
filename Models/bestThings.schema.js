const mongoose = require('mongoose');

const bestThingSchema = new mongoose.Schema({
    slug: String,
    serialNumber: Number,
    title: String,
});

module.exports = mongoose.model("BestThing", bestThingSchema,"BestThing");