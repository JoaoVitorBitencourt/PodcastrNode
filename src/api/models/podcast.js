import mongoose from '../data/index.js'

let podcastList = mongoose.model('podcast', new mongoose.Schema({
    id: String,
    title: String,
    members: String,
    publishedAt: String,
    thumbnail: String,
    description: String,
    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'file'
    }
}))

export default podcastList;