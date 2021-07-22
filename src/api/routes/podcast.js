import express from 'express';
import podcastList from '../models/podcast.js';

const route = express.Router();

route.use(express.json());

route.post('/Salvar', async (req, res) => {
    try {
        let podcast = new podcastList(req.body);
        await podcast.save();
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.get('/', async (req, res) => {
    try {
        let docs = await podcastList.find().populate('file');
        res.json(docs);
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

export default route;