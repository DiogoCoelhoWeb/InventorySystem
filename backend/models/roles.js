const { default: mongoose } = require("mongoose");

const roleSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
}, { _id: false });

const Role = mongoose.model('Role', roleSchema);