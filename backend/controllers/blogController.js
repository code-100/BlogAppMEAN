const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { BlogPost } = require('../models/blog');

// => localhost:3000/blogs/

router.get('/', (req, res) => {
    // console.log("Blog List");
    BlogPost.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    // console.log(req.params.id + "Accessed");
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    BlogPost.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    // console.log("Post");
    var blog = new BlogPost({
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
    });
    blog.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    // console.log("Update");
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var blog = {
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
    };
    BlogPost.findByIdAndUpdate(req.params.id, { $set: blog }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    // console.log("Delete");
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    BlogPost.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
