const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, unique: true, required: true },
  regiones: [{ type: Schema.Types.ObjectId, ref: "regiones" }],
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('animales', schema);