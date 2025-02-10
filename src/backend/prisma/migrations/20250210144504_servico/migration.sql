-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "category" VARCHAR(10) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" VARCHAR(150) NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Servico_title_key" ON "Servico"("title");
