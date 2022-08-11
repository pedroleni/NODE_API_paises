const Animal = require('./animal.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
  try {
    const animal = await Animal.find().populate("regiones");
    return res.json({
      status: 200,
      message: 'Recovered all animales',
      data: { animal }
    });
  } catch (error) {
    return next(setError(500, 'Failed all animales'));
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const animal = await Animal.findById(id).populate("regiones");
    if (!animal) return next(setError(404, 'Animal not found'))
    return res.json({
      status: 200,
      message: 'Recovered animal by id',
      data: { animal }
    });
  } catch (error) {
    return next(setError(500, 'Failed animal by id'))
  }
}

const create = async (req, res, next) => {
  try {
    const animalToSave = new Animal(req.body)
    const animalInDb = await animalToSave.save()
    return res.json({
      status: 201,
      message: 'Created new animal',
      data: { animalInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created animal'))
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const animal = new Animal(req.body);
    animal._id = id;
    const updateAnimal = await Animal.findByIdAndUpdate(id, animal);
    if (!animal) return next(setError(404, 'Animal not found'))
    return res.json({
      status: 200,
      message: 'Updated animal by id',
      data: { updateAnimal }
    });
  } catch (error) {
    return next(setError(500, 'Failed animal Update by id'))
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const animalRemoved = await Animal.findByIdAndDelete(id);
    if (!animalRemoved) return next(setError(404, 'Animal not found'));
    return res.json({
      status: 200,
      message: 'Removed animal by id',
      data: { animalRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed animal Remove by id'))
  }
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}