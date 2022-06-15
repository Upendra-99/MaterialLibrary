const http = require("http");
const App = require("./Routes/productsRoute");
const mongodbconnection = require("./dbConn/mongoDB");

require("dotenv").config();

const port = process.env.PORT;

http.createServer(App).listen(port, () => {
  // connect to MongoDB
  new mongodbconnection();

  console.log(`server is runnin on port no ${port}`);
});
