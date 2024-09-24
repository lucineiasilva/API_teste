import usuario from "../model/Usuario.js"

class UsuarioController {

    static async listarUsuarios (req, res){
    try{
        
            const listaUsuario = await usuario.find({})
            res.status(200).json(listaUsuario)
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        
    } 
        
    }
     static async cadastrarUsuario (req, res) {
        try{
            const novoUsuario = await usuario.create(req.body)
            res.status(201).json({message: "Usuário cadastrado com sucesso!", usuario: novoUsuario})

        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar usuário`})

        }
    }
    static async atualizarUsuario (req, res) {
        try {
          const id = req.params.id
          await livro.findByIdAndUpdate(id, req.body)
          res.status(200).json({ message: "Usuário atualizado" })
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
      }
      static async excluirUsuario (req, res) {
        try {
          const id = req.params.id;
          await livro.findByIdAndDelete(id)
          res.status(200).json({ message: "livro excluído com sucesso" })
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
      }
}
export default UsuarioController;