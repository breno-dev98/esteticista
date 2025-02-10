import express from "express";
import ServicoService from "../services/services.services.js"; // Adicione ".js" no final

const router = express.Router();

router.post("/servicos", async (req, res) => {
  try {
    const servico = await ServicoService.criarServico(req.body);
    res.status(201).json(servico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/servicos", async (req, res) => {
  try {
    const servicos = await ServicoService.listarServicos();
    res.json(servicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/servicos/:id", async (req, res) => {
  try {
    const servico = await ServicoService.buscarServicoPorId(req.params.id);
    res.json(servico);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put("/servicos/:id", async (req, res) => {
  try {
    const servicoAtualizado = await ServicoService.atualizarServico(req.params.id, req.body);
    res.json(servicoAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/servicos/:id", async (req, res) => {
  try {
    const resposta = await ServicoService.deletarServico(req.params.id);
    res.json(resposta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
