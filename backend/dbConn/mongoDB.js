const mongoose = require("mongoose");
require("dotenv").config();

class mongo {
  constructor() {
    this.mongoConnection();
  }

  mongoConnection() {
    mongoose
      .connect(process.env.MONGOURL)
      .then(() => console.log("Database connected successfully"))
      .catch(() => console.log("An error occured"));
  }
}

module.exports = mongo;
