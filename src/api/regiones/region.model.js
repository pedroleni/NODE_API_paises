const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, unique: true, required: true },
  animales: [{ type: Schema.Types.ObjectId, ref: "animales" }],
  pais:[{ type: Schema.Types.ObjectId, ref: "paises" }]
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('regiones', schema);