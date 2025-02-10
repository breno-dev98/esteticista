import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ServicoService = {
  async criarServico(data) {
    try {
      const servico = await prisma.servico.create({
        data,
      });
      return servico;
    } catch (error) {
      throw new Error(`Erro ao criar serviço: ${error.message}`);
    }
  },

  async listarServicos() {
    try {
      return await prisma.servico.findMany();
    } catch (error) {
      throw new Error(`Erro ao listar serviços: ${error.message}`);
    }
  },

  async buscarServicoPorId(id) {
    try {
      const servico = await prisma.servico.findUnique({
        where: { id: Number(id) },
      });
      if (!servico) throw new Error("Serviço não encontrado!");
      return servico;
    } catch (error) {
      throw new Error(`Erro ao buscar serviço: ${error.message}`);
    }
  },

  async atualizarServico(id, data) {
    try {
      const servicoAtualizado = await prisma.servico.update({
        where: { id: Number(id) },
        data,
      });
      return servicoAtualizado;
    } catch (error) {
      throw new Error(`Erro ao atualizar serviço: ${error.message}`);
    }
  },

  async deletarServico(id) {
    try {
      await prisma.servico.delete({
        where: { id: Number(id) },
      });
      return { message: "Serviço deletado com sucesso!" };
    } catch (error) {
      throw new Error(`Erro ao deletar serviço: ${error.message}`);
    }
  },
};

export default ServicoService;
