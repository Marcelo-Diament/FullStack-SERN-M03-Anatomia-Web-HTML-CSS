const express = require("express")
const app = express()
const port = 3333

app.get('/usuario/:id?', (req, res) => req.params.id ? res.send(`<h1>Rota GET para "/usuario/${req.params.id}"</h1>`) : res.send(`<h1>Rota GET para "/usuario"</h1>`))
app.post('/usuario', (req, res) => res.send('<h1>Rota POST para "/usuario"</h1>'))
app.put('/usuario/:id', (req, res) => res.send(`<h1>Rota PUT para "/usuario" de id ${req.params.id}</h1>`))
app.delete('/usuario/:id', (req, res) => res.send(`<h1>Rota DELETE para "/usuario" de id ${req.params.id}</h1>`))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))