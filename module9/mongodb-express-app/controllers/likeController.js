import Like from "../models/likes.js";

export default class LikeController {
    getAllLikes(req, res) {
        Like.find({})
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    createLike(data, res) {
        console.log(data)
        new Like(data).save()
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    updateLike(req, res) {
        Like.findByIdAndUpdate(req.params.id, req.body, {
            new:
                true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    deleteLike(req, res) {
        Like.findByIdAndDelete(req.params.id, {
            new: true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}