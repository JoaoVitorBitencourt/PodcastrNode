import mongoose from '../data/index.js'

let file = mongoose.model('file', new mongoose.Schema({
    url: String,
    type: String,
    duration: Number
}))

export default file;