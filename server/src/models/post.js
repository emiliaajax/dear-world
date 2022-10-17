import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxlength: [256, 'Titeln måste vara mindre än 256 tecken']
  },
  author: {
    type: String,
    maxlength: [256, 'Författarnamn måste vara mindre än 256 tecken']
  },
  text: {
    type: String,
    trim: true,
    minlength: [500, 'Texten måste vara mer än 500 tecken'],
    maxlength: [100000, 'Texten måste vara mindre än 100000 tecken']
  }
}, {
  timestamps: true,
  toJSON: {
    /**
     * Removes sensitive information by transforming the resulting object.
     *
     * @param {object} doc The mongoose document to be converted.
     * @param {object} ret The plain object response which has been converted.
     */
    transform: function (doc, ret) {
      delete ret.__v
    }
  },
  virtuals: true
})

schema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Creates a model using the schema.
export const Post = mongoose.model('Post', schema)

