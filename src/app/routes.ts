import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Adopta } from "./pages/Adopta";
import { PetDetail } from "./pages/PetDetail";
import { Noticias } from "./pages/Noticias";
import { NewsDetail } from "./pages/NewsDetail";
import { Actividades } from "./pages/Actividades";
import { Contacto } from "./pages/Contacto";
import { AdoptionForm } from "./pages/AdoptionForm";
import { Requisitos } from "./pages/Requisitos";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "noticias", Component: Noticias },
      { path: "noticias/:id", Component: NewsDetail },
      { path: "actividades", Component: Actividades },
      { path: "adopta", Component: Adopta },
      { path: "adopta/:id", Component: PetDetail },
      { path: "adopta/:id/formulario", Component: AdoptionForm },
      { path: "requisitos", Component: Requisitos },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound }
    ]
  }
]);