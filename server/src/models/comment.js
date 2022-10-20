import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  postId: {
    type: String,
    trim: true,
    maxlength: [256, 'Titeln måste vara mindre än 256 tecken']
  },
  name: {
    type: String,
    maxlength: [256, 'Författarnamn måste vara mindre än 256 tecken']
  },
  comment: {
    type: String,
    maxlength: [2000, 'Författarnamn måste vara mindre än 256 tecken']
  },
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
      delete ret._id
      delete ret.__v
    }
  },
  virtuals: true
})

schema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Creates a model using the schema.
export const Comment = mongoose.model('Comment', schema)