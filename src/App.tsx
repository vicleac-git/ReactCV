import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useResumeData } from './hooks/useResumeData';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProjectDemola from './pages/ProjectDemola';
import ProjectConsultaUll from './pages/ProjectConsultaUll';
import ProjectEncuestaOrganizacional from './pages/ProjectEncuestaOrganizacional';
import ProjectHerramientasBaremacion from './pages/ProjectHerramientasBaremacion';


function App() {
  const { data, loading, error } = useResumeData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-violet-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900 text-red-500">
        <p>Error cargando datos: {error}</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<MainLayout profile={data.perfil} />}>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/proyecto-demola-canarias" element={<ProjectDemola />} />
          <Route path="/proyecto-consulta-ull" element={<ProjectConsultaUll />} />
          <Route path="/proyecto-encuesta-organizacional" element={<ProjectEncuestaOrganizacional />} />
          <Route path="/proyecto-herramientas-baremacion-ull" element={<ProjectHerramientasBaremacion />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


