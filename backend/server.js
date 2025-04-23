const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 3000

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o MySQL
const db = mysql.createConnection({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.stack);
    return;
  }
  console.log('✅ Conectado ao MySQL!');
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'E-mail e senha são obrigatórios!' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuário no banco.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'E-mail ou senha incorretos!' });
    }

    bcrypt.compare(senha, results[0].senha, (err, match) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao comparar as senhas.' });
      }

      if (match) {
        return res.status(200).json({ message: 'Login bem-sucedido!' });
      } else {
        return res.status(401).json({ message: 'E-mail ou senha incorretos!' });
      }
    });
  });
});

// Rota de cadastro
app.post('/cadastro', (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const checkQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao verificar se o usuário já existe.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'E-mail já cadastrado!' });
    }

    // Criptografar senha antes de salvar
    bcrypt.hash(senha, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao encriptar a senha.' });
      }

      const insertQuery = 'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)';
      db.query(insertQuery, [nome, sobrenome, email, hash], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Erro ao cadastrar o usuário.' });
        }

        return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
      });
    });
  });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
