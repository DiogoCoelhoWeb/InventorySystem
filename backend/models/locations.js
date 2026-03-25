const { default: mongoose } = require("mongoose");

const LocationSchema = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, auto: true, select: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: [mongoose.ObjectId], ref: 'Batches', required: true },
  owner: { type: mongoose.ObjectId, ref: 'Users', required: true },
},
{
  collection: "Locations",
  versionKey: false,
}
);

module.exports = mongoose.model("Locations", LocationSchema);