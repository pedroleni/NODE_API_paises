const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, required: true },
  edad: { type: Number },
  pais: [{ type: Schema.Types.ObjectId, ref: "paises" }],
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('cantantes', schema);