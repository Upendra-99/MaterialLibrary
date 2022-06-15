const express = require("express");
const app = express();
const productController = require("../controllers/products");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json([]));

app.use(cors());

app.get("/getAllProducts", productController.getProductDetail);
app.get("/getProductById/:id", productController.getProductById);

module.exports = app;
