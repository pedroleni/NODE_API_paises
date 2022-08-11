const Pais = require('./pais.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
  try {
    const pais = await Pais.find().populate("regiones animales cantantes");
    return res.json({
      status: 200,
      message: 'Recovered all paises',
      data: { pais }
    });
  } catch (error) {
    return next(setError(500, 'Failed all paises'));
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findById(id).populate("regiones animales cantantes");
    if (!pais) return next(setError(404, 'Pais not found'))
    return res.json({
      status: 200,
      message: 'Recovered pais by id',
      data: { pais }
    });
  } catch (error) {
    return next(setError(500, 'Failed pais by id'))
  }
}

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const pais = await Course.find({ name: name });
    if (!pais) return next(setError(404, 'Pais not found'));
    return res.json({
      status: 200,
      message: 'Recovered pais by name',
      data: { pais }
    });
  } catch (error) {
    return next(setError(500, 'Failed pais by name'))
  }
}

const create = async (req, res, next) => {
  try {
    const paisToSave = new Pais(req.body)
    const paisInDb = await paisToSave.save()
    return res.json({
      status: 201,
      message: 'Created new pais',
      data: { paisInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created pais'))
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pais = new Pais(req.body);
    pais._id = id;
    const updatePais = await Pais.findByIdAndUpdate(id, pais);
    if (!pais) return next(setError(404, 'Pais not found'))
    return res.json({
      status: 200,
      message: 'Updated pais by id',
      data: { updatePais}
    });
  } catch (error) {
    return next(setError(500, 'Failed pais Update by id'))
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paisRemoved = await Pais.findByIdAndDelete(id);
    if (!paisRemoved) return next(setError(404, 'Pais not found'));
    return res.json({
      status: 200,
      message: 'Removed course by id',
      data: { paisRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed pais Remove by id'))
  }
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByName
}