import express from 'express';
import file from '../models/file.js';

const route = express.Router();

route.use(express.json());

route.post('/Salvar', async (req, res) => {
    try {
        let File = new file(req.body);
        await File.save();
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.get('/', async (req, res) => {
    try {
        let docs = await file.find();
        res.json(docs);
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

export default route;