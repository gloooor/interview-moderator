const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({
  name: String,
  age: Number,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Entity = mongoose.model('Entity', entitySchema);

exports.Entity = Entity;