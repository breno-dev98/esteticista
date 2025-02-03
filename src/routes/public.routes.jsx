import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home } from "@/pages/Home/Home";
import Teste from "@/components/Teste";

export function PublicRoutes() {
  return (
    <Routes>
      {/* Rota principal que usa o Layout */}
      <Route element={<Layout />}>
        {/* Conteúdo da página inicial */}
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Route>
    </Routes>
  );
}
