import express from 'express'
import cors from 'cors'
import servicoRoutes from "./src/routes/service.routes.js";
const app = express()
app.use(express.json());
app.use(cors())
app.use('/api', servicoRoutes);

app.get('/', (req, res) => {
    res.send('Servidor Funcionando!')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})