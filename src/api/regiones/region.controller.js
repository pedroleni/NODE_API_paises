const Region = require('./region.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
  try {
    const region = await Region.find().populate("animales pais");
    return res.json({
      status: 200,
      message: 'Recovered all regiones',
      data: { region }
    });
  } catch (error) {
    return next(setError(500, 'Failed all regiones'));
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const region = await Region.findById(id).populate("animales pais");
    if (!region) return next(setError(404, 'Region not found'))
    return res.json({
      status: 200,
      message: 'Recovered region by id',
      data: { region }
    });
  } catch (error) {
    return next(setError(500, 'Failed region by id'))
  }
}

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const region = await Region.find({ name: name });
    if (!region) return next(setError(404, 'Region not found'));
    return res.json({
      status: 200,
      message: 'Recovered region by name',
      data: { region }
    });
  } catch (error) {
    return next(setError(500, 'Failed region by name'))
  }
}

const create = async (req, res, next) => {
  try {
    const regionToSave = new Region(req.body)
    const regionInDb = await regionToSave.save()
    return res.json({
      status: 201,
      message: 'Created new region',
      data: { regionInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created region'))
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const region = new Region(req.body);
    region._id = id;
    const updateRegion = await Region.findByIdAndUpdate(id, region);
    if (!region) return next(setError(404, 'Region not found'))
    return res.json({
      status: 200,
      message: 'Updated region by id',
      data: { updateRegion}
    });
  } catch (error) {
    return next(setError(500, 'Failed region Update by id'))
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const regionRemoved = await Region.findByIdAndDelete(id);
    if (!regionRemoved) return next(setError(404, 'Region not found'));
    return res.json({
      status: 200,
      message: 'Removed region by id',
      data: { regionRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed region Remove by id'))
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