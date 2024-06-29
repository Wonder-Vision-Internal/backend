const bestThingsModel = require("../Models/bestThings.schema");


class BestThings {

    async addBestThingsToDo(req, res) {

        const postData = {};

        if (req.body.slug) {
            postData.slug = req.body.slug;
        }

        if (req.body.icon) {
            postData.icon = req.body.icon;
        }

        if (req.body.title) {
            postData.title = req.body.title;
        }

        await bestThingsModel.create(postData);

        res.status(200).json({})

    }

    async getBestThingsToDo(req, res) {

        const data = await bestThingsModel.find({}).lean();

        res.status(200).json({ data })

    }

    async updateBestThingsToDo(req, res) {

        const postData = {};

        if (req.body.slug) {
            postData.slug = req.body.slug;
        }

        if (req.body.icon) {
            postData.icon = req.body.icon;
        }

        if (req.body.title) {
            postData.title = req.body.title;
        }

        await bestThingsModel.updateOne({ _id: req.params.id }, {
            $set: postData
        });

        res.status(200).json({})

    }

    async deleteBestThingsToDo(req, res) {

        await bestThingsModel.deleteOne(req.params.id)

        res.status(200).json({})

    }

}

module.exports = new BestThings