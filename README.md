# 🧩 Projeto Loja — Módulo Clientes (MVC)

## 📌 Descrição do Projeto

Este projeto foi desenvolvido como parte da atividade prática de **Programação Web**, utilizando o padrão de arquitetura **MVC (Model-View-Controller)**.  
O objetivo foi **criar funcionalidades para gerenciamento de clientes** em um banco de dados, incluindo **consulta, criação, alteração e exclusão de registros**.

---

## 🎯 Resultados Esperados

- ✅ Criar funcionalidades de **consulta e criação de dados**  
- ✅ Consultar dados dos clientes  
- ✅ Criar clientes na base de dados  
- ✅ Estruturar o projeto seguindo o padrão **MVC**  
- ✅ Testar as funcionalidades utilizando o **Insomnia**

---

## 🧱 Estrutura do Projeto

📦 loja
├── 📁 controllers
│ └── clienteController.js
├── 📁 models
│ └── clienteModel.js
├── 📁 routes
│ └── clienteRoutes.js
├── 📁 database
│ └── loja.sql
├── server.js
└── package.json

---

## 🧮 Banco de Dados

Foi criada uma tabela `clientes` com as seguintes colunas:

| Campo         | Tipo         | Restrições   |
|----------------|---------------|---------------|
| `id_cliente`   | INT (PK)       | AUTO_INCREMENT |
| `nome_cliente` | VARCHAR(100)   | NOT NULL |
| `cpf_cliente`  | VARCHAR(14)    | UNIQUE, NOT NULL |

### Exemplo de criação da tabela:

```sql
CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nome_cliente VARCHAR(100) NOT NULL,
  cpf_cliente VARCHAR(14) UNIQUE NOT NULL
);
```

⚙️ Funcionalidades do clienteModel
O arquivo clienteModel.js realiza as operações com o banco de dados:

🔍 Busca de todos os clientes

➕ Criação de novos clientes

✏️ Alteração dos dados de um cliente

❌ Deleção de clientes

🧠 Funcionalidades do clienteController
O clienteController.js é responsável por intermediar as requisições entre as rotas e o modelo de dados, implementando:

Método	Rota	Descrição
GET	/clientes	Retorna todos os clientes
POST	/clientes	Cria um novo cliente
PUT	/clientes/:id	Atualiza os dados de um cliente
DELETE	/clientes/:id	Remove um cliente pelo ID

🔹 POST /clientes
Cria um novo cliente.

🔹 GET /clientes
Lista todos os clientes cadastrados.

🔹 PUT /clientes/:id
Atualiza os dados de um cliente existente.

🔹 DELETE /clientes/:id
Remove um cliente do banco de dados.

🧾 Autor: [https://www.linkedin.com/in/iannarthur]
