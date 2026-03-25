const { default: mongoose } = require("mongoose");

const BatchSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true },
  item: { type: mongoose.ObjectId, ref: 'Items', required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: false },
},
{
  collection: "Batches",
  versionKey: false,
  _id: false
}
);

module.exports = mongoose.model("Batches", BatchSchema);