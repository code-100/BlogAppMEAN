const mongoose = require('mongoose');

var BlogPost = mongoose.model('BlogPost', {
    title: { type: String },
    category: { type: String },
    content: { type: String },
});

module.exports = { BlogPost };
