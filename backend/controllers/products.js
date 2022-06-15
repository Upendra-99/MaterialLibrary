const productModel = require("../models/products");

const getProductDetail = async (req, res, next) => {
  try {
    const response = await productModel.find({});
    res.json({ message: "Done", data: response });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getProductById = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const response = await productModel.find({ _id: req.params.id });

    res.json(response[0]);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  getProductDetail,
  getProductById,
};
