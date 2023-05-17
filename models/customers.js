const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
});

customerSchema.index({ email: 1 } , {unique: true});

module.exports = mongoose.model("Customer", customerSchema);