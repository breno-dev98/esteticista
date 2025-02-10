import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Conectado ao PostgreSQL com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao PostgreSQL:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
