import Comment from "../models/comment.js";

export default class CommentController {
    getAllComments(req, res) {
        Comment.find({})
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    createComment(data, res) {
        console.log(data)
        new Comment(data).save()
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    updateComment(req, res) {
        Comment.findByIdAndUpdate(req.params.id, req.body, {
            new:
                true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    deleteComment(req, res) {
        Comment.findByIdAndDelete(req.params.id, {
            new: true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}