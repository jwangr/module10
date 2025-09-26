import User from "../models/user.js";

export default class userController {
    getUsers(req, res) {
        User.find({})
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    createUser(data, res) {
        console.log(data)
        new User(data).save()
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, {
            new:
                true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id, {
            new: true
        })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}

