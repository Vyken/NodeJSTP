
const Facture = require('../models/factureSchema');

exports.createFacture = (req,res, next) => {
    delete req.body._id;
    const facture = new Facture({
        ...req.body
    });
    facture.save() // Sauvegarde de la facture créée dans la bdd
    .then(() => res.status(201).json({message: 'Facture enregistrée'}))
    .catch(error => res.status(400).json({error}));
}

exports.getFacture = (req, res, next) => {
    Facture.find()
    .then(factures => res.status(200).json(factures))
    .catch(error => res.status(400).json({error}));
};

exports.getFactureById = (req, res, next) => {
    Facture.findOne({ _id: req.params.id})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(400).json({error}));
};

exports.getFactureByClientName = (req, res, next) => {
    const encoddedclientname = encodeURIComponent(req.params.clientname);
    Facture.findOne({ clientname: decodeURIComponent(encoddedclientname)})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(400).json({error}));
};

exports.updateFacture = (req, res, next) => {
    Facture.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(facture => res.status(200).json(facture))({message: 'facture modifée'})
    .catch(error => res.status(400).json({error}));
};

exports.deleteFacture = (req, res, next) => {
    Facture.deleteOne({ _id: req.params.id})
    .then(() => res.status(201).json({message: 'Facture Effacée'}))
    .catch(error => res.status(400).json({error}));
};