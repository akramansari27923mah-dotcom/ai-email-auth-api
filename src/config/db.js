import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('DB CONNECTED SUCCESSFULLY');
    }
    catch (err) {
        console.log(err);
        console.log('DB CONNECTION FAILEDS');
    }

}

export default connectDB