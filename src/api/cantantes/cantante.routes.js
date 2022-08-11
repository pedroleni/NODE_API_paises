const cantanteRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('./cantante.controller');

cantanteRoutes.get('/', getAll)
cantanteRoutes.get('/:id', getById)
cantanteRoutes.post('/', create)
cantanteRoutes.patch('/update/:id', update)
cantanteRoutes.delete('/delete/:id', remove)


module.exports = cantanteRoutes;