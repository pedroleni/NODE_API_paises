const PaisRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
  getByName
} = require('./pais.controller');

PaisRoutes.get('/', getAll)
PaisRoutes.get('/:id', getById)
PaisRoutes.get('/name/:name', getByName)
PaisRoutes.post('/', create)
PaisRoutes.patch('/update/:id', update)
PaisRoutes.delete('/delete/:id', remove)


module.exports = PaisRoutes;