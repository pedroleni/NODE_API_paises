const Cantante = require('./cantante.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
  try {
    const cantante = await Cantante.find().populate("pais");
    return res.json({
      status: 200,
      message: 'Recovered all cantantes',
      data: { cantante }
    });
  } catch (error) {
    return next(setError(500, 'Failed all cantantes'));
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const cantante = await Cantante.findById(id).populate("pais");
    if (!cantante) return next(setError(404, 'cantante not found'))
    return res.json({
      status: 200,
      message: 'Recovered cantante by id',
      data: { cantante }
    });
  } catch (error) {
    return next(setError(500, 'Failed cantante by id'))
  }
}

const create = async (req, res, next) => {
  try {
    const cantanteToSave = new Cantante(req.body)
    const cantanteInDb = await cantanteToSave.save()
    return res.json({
      status: 201,
      message: 'Created new cantante',
      data: { cantanteInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created cantante'))
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cantante = new Cantante(req.body);
    cantante._id = id;
    const cantanteSubject = await Cantante.findByIdAndUpdate(id, cantante);
    if (!cantante) return next(setError(404, 'Cantante not found'))
    return res.json({
      status: 200,
      message: 'Updated cantante by id',
      data: { cantanteSubject }
    });
  } catch (error) {
    return next(setError(500, 'Failed cantante Update by id'))
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cantanteRemoved = await Cantante.findByIdAndDelete(id);
    if (!cantanteRemoved) return next(setError(404, 'Cantante not found'));
    return res.json({
      status: 200,
      message: 'Removed cantante by id',
      data: { cantanteRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed cantante Remove by id'))
  }
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
}