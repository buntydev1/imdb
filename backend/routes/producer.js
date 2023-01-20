const express = require('express');
const { GetAllProducers, GetProducerById,AddProducer,UpdateProducer,DeleteProducer} = require('../controller/producer');
const router = express.Router();

router.route('/GetAllProducers').get(GetAllProducers);
router.route('/GetProducerById/:id').get(GetProducerById);
router.route('/AddProducer').post(AddProducer);
router.route('/UpdateProducer/:id').put(UpdateProducer);
router.route('/DeleteProducer/:id').delete(DeleteProducer);

module.exports = router

//     http://localhost:4001/api/v1/GetAllProducers/
//     http://localhost:4001/api/v1/GetProducerById/:id
//     http://localhost:4001/api/v1/AddProducer/
//     http://localhost:4001/api/v1/UpdateProducer/:id
//     http://localhost:4001/api/v1/DeleteProducer/:id