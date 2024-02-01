import { Route, Routes } from "react-router-dom";
import { Skills } from "../pages/Skills";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";

export default function AppRouter() {
    return (
        //Se crean las rutas para las paginas utilizando react-router-dom
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/skills" element={< Skills />} />
            <Route path="/projects" element={< Projects />} />
            <Route path="/contact" element={< Contact />} />
        </Routes>
    );
}