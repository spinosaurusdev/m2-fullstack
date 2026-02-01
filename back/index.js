const app = require("./src/server.js");
const connectDB = require("./src/config/dbConfig.js");
const port = process.env.PORT || 3001;

// Connect to MongoDB
connectDB().then((res) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
