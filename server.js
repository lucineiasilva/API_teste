import express from "express"
import app from "./src/app.js"

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor funcionando em: http://localhost:${PORT}`)
})



