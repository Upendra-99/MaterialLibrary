const mongoose = require("mongoose");

const product = mongoose.Schema({
  productTitle: { type: String, required: true },
  productImages: { type: Array, required: true },
  providerName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: Number, required: true },
  leadTime: { type: Number, required: true },
  variations: { type: Array, required: true },
  quantity: { type: Number, required: true },
  specifications: { type: Object, required: true },
  returnAndRefund: { type: String, required: true },
  FAQs: { type: Array, required: true },
});

module.exports = mongoose.model("product", product);
