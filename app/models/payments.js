const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

});

module.exports = {
    PaymentModel : mongoose.model("payment", paymentSchema)
}