import { useEffect } from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import { ResumeData } from '../types';
import { getAssetPath } from '../utils/assets';
import DOMPurify from 'dompurify';

interface DynamicProjectPageProps {
    data: ResumeData;
}

function DynamicProjectPage({ data }: DynamicProjectPageProps) {
    const location = useLocation();
    const { slug } = useParams();

    // Buscamos el proyecto comparando el slug de la URL con el final del campo 'url' de los datos
    const project = data.proyectos.find(p => {
        const projectSlug = p.url.startsWith('/') ? p.url.substring(1) : p.url;
        return projectSlug === slug;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden mb-8 h-96 shadow-2xl">
                <img src={getAssetPath(project.imagen)} alt={project.titulo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tecnologias.map((tech, index) => (
                            <span key={`tech-${index}`} className="text-xs font-medium px-2.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-500/30">
                                {tech}
                            </span>
                        ))}
                        {project.competencias?.map((comp, index) => (
                            <span key={`comp-${index}`} className="text-xs font-medium px-2.5 py-0.5 rounded bg-violet-900/50 text-violet-300 border border-violet-500/30">
                                {comp}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">{project.titulo}</h1>
                    <p className="text-gray-300 text-lg">{project.descripcion}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Contenido Principal (Renderizado dinámico del CMS) */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20">
                        <div 
                            className="dynamic-project-content"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.detalle_extendido || '') }}
                        />
                    </div>
                </div>

                {/* Sidebar de Información */}
                <div className="space-y-6">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4 text-cyan-400">Detalles</h3>
                        <div className="space-y-4 text-sm">
                            {project.organizacion && (
                                <div>
                                    <div className="text-gray-400 mb-1">Institución / Cliente</div>
                                    <div className="font-semibold text-white">{project.organizacion}</div>
                                </div>
                            )}
                            {project.estado && (
                                <div>
                                    <div className="text-gray-400 mb-1">Estado</div>
                                    <div className="font-semibold text-green-400">{project.estado}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DynamicProjectPage;
