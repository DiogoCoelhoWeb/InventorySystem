const { default: mongoose } = require("mongoose");

const AuditSchema = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, auto: true, select: true },
  user: { type: String, required: true },
  message: { type: String, required: true },
  level: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
},
{
  collection: "AuditLogs",
  versionKey: false,
}
);

module.exports = mongoose.model("AuditLogs", AuditSchema);