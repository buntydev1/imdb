const express = require('express');
const { GetAllActors, GetActorById,AddActor,UpdateActor,DeleteActor} = require('../controller/actor');
const router = express.Router();

router.route('/GetAllActors').get(GetAllActors);
router.route('/GetActorById/:id').get(GetActorById);
router.route('/AddActor').post(AddActor);
router.route('/UpdateActor/:id').put(UpdateActor);
router.route('/DeleteActor/:id').delete(DeleteActor);

module.exports = router

//     http://localhost:4001/api/v1/GetAllActors/
//     http://localhost:4001/api/v1/GetActorById/:id
//     http://localhost:4001/api/v1/AddActor/
//     http://localhost:4001/api/v1/UpdateActor/:id
//     http://localhost:4001/api/v1/DeleteActor/:id