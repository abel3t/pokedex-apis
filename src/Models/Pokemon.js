const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, trim: true },
  id: { type: Number },
  number: { type: String, trim: true },
  abilities: { type: Array },
  types: { type: Array },
  src: { type: String, trim: true },
  weakness: { type: Array },
  featured: { type: Boolean },
  height: { type: Number },
  weight: { type: Number },
  status: { type: Boolean, default: true }
});

module.exports = {
  Pokemon: mongoose.model('Pokemon', schema, 'pokemons')
}