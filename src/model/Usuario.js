import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    idade: {type: Number}

}, {versionKey: false});

const usuario = mongoose.model("usuario", UsuarioSchema);

export default usuario;