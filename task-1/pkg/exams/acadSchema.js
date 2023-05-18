const mongoose = require("mongoose");

const acadSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Academy = mongoose.model("Academy", acadSchema);

module.exports = Academy;
