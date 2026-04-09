import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CookieConsent } from './Components/CookieConsent';

import SkeletonHero from './Components/SkeletonHero';
import { useResumeData } from './hooks/useResumeData';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  const { data, loading, error } = useResumeData();

  if (loading) {
    return <SkeletonHero />;
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
      <CookieConsent />
      <Routes>
        <Route element={<MainLayout profile={data.perfil} />}>
          <Route path="/" element={<Home data={data} />} />
          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
