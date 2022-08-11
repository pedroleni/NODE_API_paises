const RegionRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('./region.controller');

RegionRoutes.get('/', getAll)
RegionRoutes.get('/:id', getById)
RegionRoutes.post('/', create)
RegionRoutes.patch('/update/:id', update)
RegionRoutes.delete('/delete/:id', remove)


module.exports = RegionRoutes;