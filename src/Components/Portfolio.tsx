import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../types';
import { projectsData } from '../data/projects';

interface PortfolioProps {
    projects: ProjectItem[];
}

function Portfolio({ projects: propProjects }: PortfolioProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [projects, setProjects] = useState<ProjectItem[]>(
        propProjects && propProjects.length > 0 ? propProjects : projectsData
    );

    useEffect(() => {
        if (propProjects && propProjects.length > 0) {
            setProjects(propProjects);
        } else {
            setProjects(projectsData);
        }
    }, [propProjects]);

    const isInternalLink = (url: string) => {
        return url.startsWith('/');
    };

    return (
        <section id="portfolio" className="py-6 md:py-10 bg-slate-900 relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 z-10">
                <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-12 -mx-6 px-6 border-b border-violet-500/10 transition-all duration-300">
                    <div
                        className="flex items-center justify-center gap-4 cursor-pointer group"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            Portafolio de proyectos
                        </h2>
                        <button className="text-3xl text-violet-400 group-hover:text-cyan-400 transition-colors">
                            {isCollapsed ? '▼' : '▲'}
                        </button>
                    </div>
                </div>

                {!isCollapsed && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-violet-500/20 hover:border-violet-400 group flex flex-col h-full">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.imagen}
                                        alt={project.titulo}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Proyecto'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{project.titulo}</h4>
                                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3" title={project.descripcion}>
                                        {project.descripcion}
                                    </p>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tecnologias && project.tecnologias.map((tech, i) => (
                                            <span key={`tech-${i}`} className="text-xs font-medium px-2.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-500/30">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.competencias && project.competencias.map((comp, i) => (
                                            <span key={`comp-${i}`} className="text-xs font-medium px-2.5 py-0.5 rounded bg-violet-900/50 text-violet-300 border border-violet-500/30">
                                                {comp}
                                            </span>
                                        ))}
                                    </div>

                                    {isInternalLink(project.url) ? (
                                        <Link to={project.url} className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition duration-300 group-hover:translate-x-1 mt-auto">
                                            Ver detalles del proyecto <span className="ml-1">&rarr;</span>
                                        </Link>
                                    ) : (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition duration-300 group-hover:translate-x-1 mt-auto">
                                            Ver detalles del proyecto <span className="ml-1">&rarr;</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;

