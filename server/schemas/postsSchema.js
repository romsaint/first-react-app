const mongoose = require('mongoose')

const schema = new mongoose.Schema({
   title: {
        type: String,
        required: true
   },
   additionalInfo: {
        type: String,
        required: false
   },
   date_created: {
    type: Date,
    default: () => Date.now()
   }
})


module.exports = mongoose.model('posts', schema)