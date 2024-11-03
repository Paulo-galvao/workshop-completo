import mongoose from "mongoose";
import "dotenv/config";
const mongodb = process.env.MONGODB;

async function main() {
    try {
        await mongoose.connect(mongodb);  
        console.log("Db connected");
    } catch (error) {
        console.log(error.message);
        
    }
}

main();

export default mongoose;