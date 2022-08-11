const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  bandera: { type: String, unique: true, required: true },
  continente: { type: String, required: true },
  regiones: [{ type: Schema.Types.ObjectId, ref: "regiones" }],
  animales: [{ type: Schema.Types.ObjectId, ref: "animales" }],
  cantantes: [{ type: Schema.Types.ObjectId, ref: "cantantes" }],
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('paises', schema);