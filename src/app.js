import express from "express"
import routes from "./routes/index.js"
import { configDotenv } from "dotenv"
import conectarMongo from "./config/dbConnect.js"


const app = express()
app.use(express.json())

const conexao = await conectarMongo()

conexao.on("error", (erro) => {
    console.error("Erro ao conectar")
})

conexao.once("open", () => {
    console.log("Conexão com o BD realizado com sucesso!")
})

routes(app);
export default app

