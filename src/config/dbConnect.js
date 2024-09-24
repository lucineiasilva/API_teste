import mongoose from "mongoose"
import { configDotenv } from "dotenv";

async function conectarMongo() {
    mongoose.connect(URL_BD)

    return mongoose.connection;
    
}
export default conectarMongo;

