// Set up mongoose connection
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

mongoose.set("strictQuery", false);
const mongoDB = process.env.DB_URI;

async function connectMongoose() {
    await mongoose.connect(mongoDB);
}

try {
    connectMongoose();
    console.log("MongoDB Connected");
} catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
}

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error: "));
export { mongoose, connectMongoose };