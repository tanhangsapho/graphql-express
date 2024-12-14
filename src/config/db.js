const mongoose = require("mongoose");

const connectionDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected".cyan.underline.bold);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionDb;
