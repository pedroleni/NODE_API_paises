const AnimalRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('./animal.controller');

AnimalRoutes.get('/', getAll)
AnimalRoutes.get('/:id', getById)
AnimalRoutes.post('/', create)
AnimalRoutes.patch('/update/:id', update)
AnimalRoutes.delete('/delete/:id', remove)


module.exports = AnimalRoutes;