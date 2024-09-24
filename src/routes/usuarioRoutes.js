import express from "express"
import UsuarioController from "../controllers/usuarioController.js"

const router = express.Router()

router
.get("/usuario", UsuarioController.listarUsuarios)
//.get("/usuario/:id", UsuarioController.listarUsuariosPorId)
.post("/usuario", UsuarioController.cadastrarUsuario)
.put("/usuario/:id", UsuarioController.atualizarUsuario)
.delete("/usuario/:id", UsuarioController.excluirUsuario);

export default router;