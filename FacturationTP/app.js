const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const router = require('./routes/factures.js')

// Connection à mongoose (database)
mongoose.connect('mongodb+srv://user:userpass@cluster0.4gvkfpl.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connexion Réussie à MongoDB'))
.catch(() => console.log('Connexion échouée à MongoDB'));

// headers pour les erreurs
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
});

// route utilisée
app.use('/api/factures', router);
module.exports = app