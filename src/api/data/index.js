 import mongoose from 'mongoose';

const uri = "mongodb+srv://root:gC*w_3xAE-APHnx@cluster0.xihiy.mongodb.net/Podcastr?retryWrites=true&w=majority";
// const uri = "mongodb+srv://root:gC*w_3xAE-APHnx@cluster0.dimtq.mongodb.net/Podcastr?retryWrites=true&w=majority";
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, opcoes);

mongoose.connection.on('connected', () => {
    console.log('Conexão realizada com sucesso!');
})

export default mongoose;