const mongoose = require ('mongoose');

const factureSchema = new mongoose.Schema({
    id : {type : Number, required : true},
    clientname : {type : String, required : true},
    montant : {type : Number, required : true},
    createdAt : {type : String, required : true},
    payee : {type : Boolean, required : true},
});

module.exports = mongoose.model('Facture', factureSchema);