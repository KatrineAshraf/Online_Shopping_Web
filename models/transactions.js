const mongoose = require("../database.js");
const { Schema } = mongoose;

const transactionsSchema = new Schema({
    CID: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("TransactionHistory", transactionsSchema);