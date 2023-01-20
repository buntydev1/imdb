const express = require('express');
const { GetAllMovies, GetMovieById,AddMovie,UpdateMovie,DeleteMovie} = require('../controller/movies');
const router = express.Router();

router.route('/GetAllMovies').get(GetAllMovies);
router.route('/GetMovieById/:id').get(GetMovieById);
router.route('/AddMovie').post(AddMovie);
router.route('/UpdateMovie/:id').put(UpdateMovie);
router.route('/DeleteMovie/:id').delete(DeleteMovie);


module.exports = router

//     http://localhost:4001/api/v1/GetAllMovies/
//     http://localhost:4001/api/v1/GetMovieById/:id
//     http://localhost:4001/api/v1/AddMovie/
//     http://localhost:4001/api/v1/UpdateMovie/:id
//     http://localhost:4001/api/v1/DeleteMovie/:id