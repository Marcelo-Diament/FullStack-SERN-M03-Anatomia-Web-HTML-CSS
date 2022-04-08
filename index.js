const express = require("express")
const app = express()
const port = 3333

app.get('/usuario', (req, res) => res.send('<h1>Rota GET para "/usuario"</h1>'))
app.post('/usuario', (req, res) => res.send('<h1>Rota POST para "/usuario"</h1>'))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))