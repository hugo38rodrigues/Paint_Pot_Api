
const mongoose = require('mongoose')

const potSchema = mongoose.Schema(
  {
    color: {
      type: String,
      require: true
    },
    brand: {
      type: String,
      require: true
    },
    ref_code: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('pot', potSchema)

