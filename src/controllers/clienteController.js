const clienteModel = require('../models/clienteModel');

const clienteController = {

  /**
   * Retorna os clientes cadastrados
   * Rota GET /cliente
   * @async
   * @function selecionaTodos
   * @param {Request} req Objeto da requisição HTTP 
   * @param {Response} res Objeto da resposta HTPP 
   * @returns {promiseArrayObjects>>} Objeto contendo o resultado da consulta
   */

incluiCliente: async (req, res) => {
  try {
 const { nome, cpf } = req.body;

 if ((nome && !isNaN(nome)) || (cpf && isNaN(cpf))) {
    return res.status(400).json({ message: 'Verifique os dados enviados e tente novamente' });
  }

  const resultado = await clienteModel.insert(nome, cpf);
  if(resultado.insertId === 0 ) {
    throw new Error("Ocorreu ao inserir o cliente ");
  }
  res.status(201).json({
        message: 'Cadastrado com sucesso',
        data: resultado,
      });
  } catch (error) {
    console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro no servidor',
        errorMessage: error.message });
  }
},
selecionaTodos: async (req, res) => {
    try {
      const { idCliente } = req.query;
      if (idCliente) {
        const resultadoCliente = await clienteModel.selectById(idcliente);
        return res.status(200).json({ message: 'A consulta não retornou resultados' });
        
      }
      const resultado = await clienteModel.selectAll();
      if (resultado.length === 0 ) {
        return res.status(200).json({ message: 'A consulta não retornou resultados' });
      }
      res.status(200).json({data: resultado})
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro no servidor',
        errorMEssage: error.message });
    }
  },

  
alteraCliente: async (req, res) => {
  try {
    const idCliente = Number(req.params.idCliente);
    const { nome, cpf } = req.body;
    
 if (!idCliente || typeof idCliente != 'number') {
      return res.status(400).json({ message: 'ID do cliente invalido' }); }

  const clienteAtual = await clienteModel.selectById(idCliente)
  if (clienteAtual.length === 0) {
    return res.status(200).json({message: 'Cliente não localizado na base de dados!'});
  }
  
  const novoNome = nome ?? clienteAtual[0].nome_cliente;
  const novoCpf = cpf ?? clienteAtual[0].cpf_cliente;
  
  const resultUpdate = await clienteModel.update(idCliente, nome, novoCpf);

  
  if(resultUpdate.affectedRows === 1 && resultUpdate.changedRows === 0) {
    res.status(200).json({ message: 'Não há alterações a serem realizadas'})
  };

  if(resultUpdate.affectedRows === 1 && resultUpdate.changedRows === 1){
    res.status(200).json({ message: 'Alteração Realizada com Sucesso'})
  }
  
} catch (error) {
  console.error(error)
  res.status(500).json({message: 'Ocorreu um erro no servidor', errorMessage: error.message});
}
},


  selecionaTodos: async (req, res) => {
    try {
      const { idCliente } = req.query;
      if (idCliente) {
        const resultadoCliente = await clienteModel.selectById(idCliente);
        return res.status(200).json({ message: 'A consulta não retornou resultados' });
        
      }
      const resultado = await clienteModel.selectAll();
      if (resultado.length === 0 ) {
        return res.status(200).json({ message: 'A consulta não retornou resultados' });
      }
      res.status(200).json({data: resultado})
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro no servidor',
        errorMEssage: error.message });
  }},

  

deleteCliente: async (req, res) => {
  try {
     const idCliente = Number(req.params.idCliente);

     if(!idCliente || !Number.isInteger(idCliente)) {
      res.status(400).json({message: 'forneça um ID válido', errorMessage: error.message});
     }

     const ClienteSelecionado = await clienteModel.selectById(idCliente);
     if (ClienteSelecionado.length === 0 ) {
       res.status(200).json({message: 'cliente nao localizado na base de dados', errorMessage: error.message});
     }
     const resultadoDelete = await clienteModel.delete(idCliente);
     if (resultadoDelete.affectedRows === 0) {
      return res.status(200).json({message: 'ocorreu um erro ao excluir os dados do cliente'})
     }

     res.status(200).json({message: 'cliente deletado com sucesso da base de dados'})

  } catch (error) {
   console.error(error)
  res.status(500).json({message: 'Ocorreu um erro no servidor', errorMessage: error.message});
  }},
  

};

module.exports = { clienteController };






