const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
  items: [
    {
      imageUrl: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Collection", collectionSchema);
