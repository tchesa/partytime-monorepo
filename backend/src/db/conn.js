const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/party_time");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Connection error: ${error}`);
  }
}

module.exports = main;
