import express from 'express';
import routePodcast from './api/routes/podcast.js';
import routeFile from './api/routes/file.js';

const app = express();
const PORTA = process.env.PORT || 8080;

app.use('/podcast', routePodcast);

app.use('/file', routeFile);

app.use('/', (req, res) => {
    res.redirect('/podcast');
});

app.listen(PORTA, () => {
    console.log(`Servidor esta rodando na Porta ${PORTA}`);
});