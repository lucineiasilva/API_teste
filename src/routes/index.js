import express from "express"
import usuarios from "./usuarioRoutes.js"
import { configDotenv } from "dotenv"


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Testando get"))

    app.use(express.json(), usuarios)
}
export default routes;