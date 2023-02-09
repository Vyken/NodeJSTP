const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const factureController = require('../controllers/article');

// requete post
router.post('/', factureController.createFacture);

//  requete put
router.put('/:id', factureController.updateFacture);


//requete getById
router.get('/:id', factureController.getFactureById);

// requete getByClientName
router.get('/clientname/:clientname', factureController.getFactureByClientName);

// requete get
router.get('/', factureController.getFacture);


// requete delete
router.delete('/api/factures/:id', factureController.deleteFacture);

module.exports = router;