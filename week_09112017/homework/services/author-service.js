const AuthorModel = require('../models/author-model');

async function findAll() {
    return AuthorModel.find();
}

async function find(id) {
    return AuthorModel.findOne({ id });
}

async function add(author) {
    return AuthorModel.create(author);
}

module.exports = {
    findAll,
    find,
    add
}