const packageYoutubeModel = require("../Models/packageYoutube.schema");


class PackageYoutubeUrlController {

    async addPackageYoutube(req, res) {

        const postData = {};

        if (req.body.slug) {
            postData.slug = req.body.slug;
        }

        if (req.body.url) {
            postData.url = req.body.url;
        }

        await packageYoutubeModel.create(postData);

        res.status(200).json({})

    }

    async getPackageYoutube(req, res) {

        const data = await packageYoutubeModel.find({}).lean();

        res.status(200).json({data})

    }

    async updatePackageYoutube(req, res) {

        const postData = {};

        if (req.body.slug) {
            postData.slug = req.body.slug;
        }

        if (req.body.url) {
            postData.url = req.body.url;
        }

        await packageYoutubeModel.updateOne({ _id: req.params.id }, {
            $set: postData
        });

        res.status(200).json({})

    }

    async deletePackageYoutube(req, res) {

        await packageYoutubeModel.deleteOne(req.params.id)

        res.status(200).json({})

    }

}

module.exports = new PackageYoutubeUrlController