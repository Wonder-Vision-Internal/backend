const mongoose = require('mongoose');

const packageYoutubeSchema = new mongoose.Schema({
    slug: String,
    url: String,
});

module.exports = mongoose.model("PackageYoutube", packageYoutubeSchema,"PackageYoutube");