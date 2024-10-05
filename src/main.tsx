import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./components/Index/Index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nosotros from "./components/Nosotros/Nosotros.tsx";
import DeslizarArriba from "./components/utils/DeslizarArriba.tsx";

import Bodas from "./components/Portfolio/Bodas/Bodas.tsx";
import Servicios from "./components/Servicios/Servicios.tsx";
import Niños from "./components/Portfolio/Niños/Niños.tsx";
import Eventos from "./components/Portfolio/Eventos/Eventos.tsx";
import Boda from "./components/Portfolio/Bodas/Boda.tsx";
import Videos from "./components/Videos.tsx";
import Productos from "./components/Portfolio/Productos/Productos.tsx";
import LauraYCristobal from "./components/Portfolio/Bodas/GridsFotos/LauraYCristobal.tsx";
import PatriciaYJoaquin from "./components/Portfolio/Bodas/GridsFotos/PatriciaYJoaquin.tsx";
import PepaYJuan from "./components/Portfolio/Bodas/GridsFotos/PepaYJuan.tsx";
import SofiaYMarco from "./components/Portfolio/Bodas/GridsFotos/SofiaYMarco.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DeslizarArriba />

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/portfolio/bodas" element={<Bodas />} />
        <Route
          path="/portfolio/bodas/Laura-y-Cristobal"
          element={
            <Boda
              novios="Laura y Cristóbal"
              fotos={<LauraYCristobal />}
            />
          }
        />
        <Route
          path="/portfolio/bodas/Patricia-y-Joaquin"
          element={
            <Boda
              novios="Patricia y Joaquín"
              fotos={<PatriciaYJoaquin />}
            />
          }
        />
        <Route
          path="/portfolio/bodas/Pepa-y-Juan"
          element={
            <Boda
              novios="Pepa y Juan"
              fotos={<PepaYJuan />}
            />
          }
        />
        <Route
          path="/portfolio/bodas/Sofia-y-Marco"
          element={
            <Boda
              novios="Sofía y Marco"
              fotos={<SofiaYMarco />}
            />
          }
        />
        <Route path="/portfolio/niños" element={<Niños />} />
        <Route path="/portfolio/eventos" element={<Eventos />} />
        <Route path="/portfolio/productos" element={<Productos />} />

        <Route path="/servicios" element={<Servicios />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
