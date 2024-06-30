const bestPlacesModel = require("../Models/bestPlaces.schema");


class BestPlaces {

    async addBestPlaces(req, res) {

        const postData = {};

        if (req.body.slug) {
            postData.slug = req.body.slug;
        }

        if (req.body.description) {
            postData.description = req.body.description;
        }

        if (req.body.title) {
            postData.title = req.body.title;
        }

        if (req.body.img) {
            postData.img = req.body.img;
        }

        await bestPlacesModel.create(postData);

        res.status(200).json({})

    }

    async getBestPlaces(req, res) {

        const data = await bestPlacesModel.find({}).lean();

        res.status(200).json({ data })

    }

    async updateBestPlaces(req, res) {

        const postData = {};

        if (req.body.slug) {
            postData.slug = req.body.slug;
        }

        if (req.body.description) {
            postData.description = req.body.description;
        }

        if (req.body.title) {
            postData.title = req.body.title;
        }

        if (req.body.img) {
            postData.img = req.body.img;
        }

        await bestPlacesModel.updateOne({ _id: new mongoose.Types.ObjectId(req.params.id) }, {
            $set: postData
        });

        res.status(200).json({})

    }

    async deleteBestPlaces(req, res) {

        await bestPlacesModel.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id) })

        res.status(200).json({})

    }

}

module.exports = new BestPlaces