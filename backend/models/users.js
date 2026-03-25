const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  hashed_password: { type: String, required: true, select: false },
  roles: [{ type: String, ref: 'Role' }]
},
{
  collection: "Users",
  versionKey: false,
  _id: false
}
);

module.exports = mongoose.model("Users", UserSchema);