const mongoose = require('mongoose')
const modelPlaneSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    ref_code: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    list_pots: {
      type: Array,
      require: true
    },
  }
)

module.exports = mongoose.model('modelPlane', modelPlaneSchema)
