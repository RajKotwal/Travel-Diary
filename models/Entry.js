const mongoose = require('mongoose')
const entrySchema = new mongoose.Schema({
title: String,
date: Date,
location: String,
description: String,
imageUrl: String
})
module.exports = mongoose.model('Entry', entrySchema)