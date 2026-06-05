import dns from "dns";
import mongoose from "mongoose";

const connectDB = async () => {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
