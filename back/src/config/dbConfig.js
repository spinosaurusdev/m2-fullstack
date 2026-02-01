const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://spinosaurus:6jGLPVcKaJsWxpV@henrymovies.thgias1.mongodb.net/",
  );
};

module.exports = connectDB;
