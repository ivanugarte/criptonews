const express = require('express');
const router = express.Router();
const customerControler = require('../controllers/customerController'); 

router.get('/', customerControler.list);
router.post('/add', customerControler.add);
router.get('/delete/:id', customerControler.delete);
router.get('/update/:id', customerControler.edit);
router.post('/update/:id', customerControler.update);

module.exports = router;