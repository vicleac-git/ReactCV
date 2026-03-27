import { useState, useEffect } from 'react';
import type { ProjectItem } from '../types';
import DOMPurify from 'dompurify';
import { X, Calendar, Building2, Briefcase, Wrench, ExternalLink, Award } from 'lucide-react';

interface PortfolioProps {
    projects: ProjectItem[];
}

function Portfolio({ projects: propProjects }: PortfolioProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [projects, setProjects] = useState<ProjectItem[]>(propProjects || []);

    useEffect(() => {
        setProjects(propProjects || []);
    }, [propProjects]);

    // Bloquear scroll y manejar eventos de teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };

        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    const isInternalLink = (url: string) => {
        return url.startsWith('/');
    };

    return (
        <section id="portfolio" className="py-6 md:py-10 bg-slate-900 relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 z-10">
                <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-12 -mx-6 px-6 border-b border-violet-500/10 transition-all duration-300">
                    <button
                        className="flex items-center justify-center gap-4 cursor-pointer group w-full bg-transparent border-none p-0"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-expanded={!isCollapsed}
                    >
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            Portafolio de proyectos
                        </h2>
                        <span className="text-3xl text-violet-400 group-hover:text-cyan-400 transition-colors">
                            {isCollapsed ? '▼' : '▲'}
                        </span>
                    </button>
                </div>

                {!isCollapsed && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className="group relative bg-slate-800/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            >
                                {/* Contenedor de Imagen con Proporción Fija */}
                                <div className="relative aspect-video overflow-hidden m-4 rounded-2xl bg-slate-900">
                                    <img
                                        src={project.imagen}
                                        alt={project.titulo}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x450/1e293b/ffffff?text=Proyecto'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Badge de Estado flotando sobre la imagen */}
                                    {project.estado && (
                                        <div className="absolute top-3 right-3">
                                            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                                                {project.estado}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Contenido de la Tarjeta */}
                                <div className="px-6 pb-6 flex flex-col flex-grow relative">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                        {project.titulo}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 pr-14">
                                        {project.descripcion}
                                    </p>

                                    {/* El Botón Magnético Re-imaginado */}
                                    <button 
                                        onClick={() => setSelectedProject(project)}
                                        className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-slate-700/50 border border-white/10 text-white transition-all duration-500 group-hover:w-28 group-hover:bg-violet-600 group-hover:border-violet-400 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] overflow-hidden"
                                    >
                                        <div className="flex items-center justify-center relative w-full">
                                            <ExternalLink size={16} className="shrink-0 group-hover:rotate-12 transition-transform duration-500" />
                                            <span className="text-[10px] font-bold max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 whitespace-nowrap overflow-hidden">
                                                Detalles
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Modal de Detalle de Proyecto */}
                {selectedProject && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div 
                            className="bg-slate-900 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            
                            {/* Botón de cierre global (Siempre visible) */}
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-[110] bg-slate-800/80 hover:bg-red-500/20 text-white p-2.5 rounded-full border border-white/10 transition-all hover:rotate-90 shadow-xl backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* COLUMNA 1: META (Sticky/Fixed on Desktop) */}
                            <div className="w-full md:w-80 lg:w-96 bg-slate-800/40 border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-8 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
                                <div className="relative group mb-8">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <img 
                                        src={selectedProject.imagen} 
                                        alt={selectedProject.titulo} 
                                        className="relative w-full h-48 md:h-56 object-cover rounded-2xl border border-white/10"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-cyan-400 mb-2">
                                            <Building2 size={18} />
                                            <span className="text-xs font-bold uppercase tracking-widest">Organización</span>
                                        </div>
                                        <p className="text-white font-bold text-lg">{selectedProject.organizacion || 'Proyecto Independiente'}</p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 text-violet-400 mb-2">
                                            <Briefcase size={18} />
                                            <span className="text-xs font-bold uppercase tracking-widest">Puesto / Rol</span>
                                        </div>
                                        <p className="text-gray-200">{selectedProject.titulo}</p>
                                    </div>

                                    {selectedProject.fecha_inicio && (
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex-1 min-w-[120px]">
                                                <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                    <Calendar size={18} />
                                                    <span className="text-xs font-bold uppercase tracking-widest">Periodo</span>
                                                </div>
                                                <p className="text-sm font-mono text-cyan-300">
                                                    {selectedProject.fecha_inicio ? new Date(selectedProject.fecha_inicio).getFullYear() : '—'} 
                                                    {selectedProject.fecha_fin ? ` - ${new Date(selectedProject.fecha_fin).getFullYear()}` : ' - Actualidad'}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Cajón de Herramientas (Cian) */}
                                    <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 space-y-3">
                                        <div className="flex items-center gap-2 text-cyan-400">
                                            <Wrench size={16} />
                                            <span className="text-xs font-bold uppercase tracking-widest">Herramientas</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tecnologias.map((tech, i) => (
                                                <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-500/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cajón de Competencias (Violeta) */}
                                    {selectedProject.competencias && selectedProject.competencias.length > 0 && (
                                        <div className="p-4 rounded-2xl bg-violet-500/5 border border-violet-500/10 space-y-3">
                                            <div className="flex items-center gap-2 text-violet-400">
                                                <Award size={16} />
                                                <span className="text-xs font-bold uppercase tracking-widest">Competencias</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.competencias.map((comp, i) => (
                                                    <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-violet-900/50 text-violet-300 border border-violet-500/30">
                                                        {comp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {!isInternalLink(selectedProject.url) && (
                                    <a 
                                        href={selectedProject.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl transition-all font-bold text-sm shadow-lg shadow-violet-900/20"
                                    >
                                        Visitar Proyecto <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>

                            {/* COLUMNA 2: CONTENIDO */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-12 relative bg-slate-900 custom-scrollbar">
                                {/* Header Flotante del Contenido */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="space-y-4 max-w-2xl">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-tighter">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            {selectedProject.estado || 'Finalizado'}
                                        </div>
                                        <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed border-l-4 border-cyan-500 pl-6 py-2">
                                            "{selectedProject.descripcion}"
                                        </p>
                                    </div>
                                </div>

                                {/* Detalle Extendido Parseado */}
                                <div className="prose prose-invert prose-cyan max-w-none">
                                    {selectedProject.detalle_extendido && (
                                        <div 
                                            className="space-y-2 text-gray-300"
                                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedProject.detalle_extendido) }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;
