const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  linkUrl: {
    type: String,
    required: true,
  },
  size : {
    type: String,
  }
});

module.exports = mongoose.model("Directory", directorySchema);
