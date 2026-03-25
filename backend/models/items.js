const { default: mongoose } = require("mongoose");

const ItemSchema = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, auto: true, select: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  minInventory: { type: Number, required: true },
  reusable: { type: Boolean, required: true },
  category: { type: String, required: true },
  keywords: { type: [String], required: true },
  editingRoles: [{ type: String, ref: 'Role' }],
  accessRoles: [{ type: String, ref: 'Role' }]
},
{
  collection: "Items",
  versionKey: false,
}
);

module.exports = mongoose.model("Items", ItemSchema);