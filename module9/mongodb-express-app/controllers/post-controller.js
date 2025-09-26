import Post from "../models/post.js";

export default class PostController {
    getPosts(req, res) {
        Post.find({})
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    createPost(data, res) {
        console.log(data)
        new Post(data).save()
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    updatePost(req, res) {
        Post.findByIdAndUpdate(req.params.id, req.body, {
            new:
                true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    deletePost(req, res) {
        Post.findByIdAndDelete(req.params.id, {
            new: true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}