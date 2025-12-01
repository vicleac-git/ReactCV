import { useState } from 'react';
import type { ExperienceItem, EducationItem } from '../types';

interface ExperienceProps {
    experience: ExperienceItem[];
    education: EducationItem[];
}

import DOMPurify from 'dompurify';

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
    const [showExtended, setShowExtended] = useState(false);

    // Parse tools if available
    const tools = item.herramientas
        ? (typeof item.herramientas === 'string' ? item.herramientas.split(',').map(t => t.trim()) : item.herramientas)
        : [];

    return (
        <div className="mb-8 border-l-2 border-violet-500/50 pl-6 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-violet-500 before:rounded-full before:-left-[7px] before:top-1.5 before:shadow-[0_0_10px_#8b5cf6]">
            <p className="text-sm text-cyan-400 font-mono mb-1">
                {new Date(item.fecha_inicio).getFullYear()} - {item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : 'Actualidad'}
            </p>
            <div className="flex items-start gap-3 mb-2">
                {item.logo && (
                    <img src={item.logo} alt={item.empresa} className="w-12 h-12 object-contain bg-white rounded p-1" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                )}
                <div className="flex-1">
                    <h4 className="text-xl font-bold text-white">{item.puesto}</h4>
                    {item.url_empresa ? (
                        <a href={item.url_empresa} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-violet-400 transition-colors">
                            {item.empresa}
                        </a>
                    ) : (
                        <p className="text-gray-300 font-medium">{item.empresa}</p>
                    )}
                </div>
            </div>

            {item.descripcion && <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.descripcion}</p>}

            {/* Extended Details */}
            {item.detalle_extendido && (
                <div className="mb-4">
                    {showExtended && (
                        <div
                            className="mt-2 mb-3 p-4 bg-slate-900/50 rounded-lg border border-violet-500/10 text-sm text-gray-300 leading-relaxed animate-fadeIn prose prose-invert prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.detalle_extendido) }}
                        />
                    )}
                    <button
                        onClick={() => setShowExtended(!showExtended)}
                        className="text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                    >
                        {showExtended ? 'Reducir detalles -' : 'Ampliar detalles +'}
                    </button>
                </div>
            )}

            {/* Tools Footer */}
            {tools.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-cyan-500/10">
                    {tools.map((tool: string, i: number) => (
                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-500/30">
                            {tool}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

function Experience({ experience, education }: ExperienceProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Ordenar experiencias de más reciente a más antigua
    const sortedExperience = [...experience].sort((a, b) => {
        const dateA = new Date(a.fecha_inicio).getTime();
        const dateB = new Date(b.fecha_inicio).getTime();
        return dateB - dateA;
    });

    // Ordenar educación de más reciente a más antigua
    const sortedEducation = [...education].sort((a, b) => {
        const dateA = new Date(a.fecha_inicio).getTime();
        const dateB = new Date(b.fecha_inicio).getTime();
        return dateB - dateA;
    });

    return (
        <section id="experience" className="py-8 md:py-12 bg-slate-900 relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 z-10">
                <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-12 -mx-6 px-6 border-b border-violet-500/10 transition-all duration-300">
                    <div
                        className="flex items-center justify-center gap-4 cursor-pointer group"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Formación y trayectoria profesional</h2>
                        <button className="text-3xl text-violet-400 group-hover:text-cyan-400 transition-colors">
                            {isCollapsed ? '▼' : '▲'}
                        </button>
                    </div>
                </div>

                {!isCollapsed && (
                    <div className="space-y-10">

                        {/* Subsección: EDUCACIÓN */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2 flex items-center gap-2">
                                <span className="text-2xl">🎓</span> Educación
                            </h3>

                            {/* Una sola columna vertical */}
                            <div className="space-y-6">
                                {sortedEducation.map((item, index) => (
                                    <div key={index} className="border-l-2 border-cyan-500/50 pl-6 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-cyan-500 before:rounded-full before:-left-[7px] before:top-1.5 before:shadow-[0_0_10px_#06b6d4]">
                                        <p className="text-sm text-violet-400 font-mono mb-1">
                                            {new Date(item.fecha_inicio).getFullYear()} - {item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : 'Actualidad'}
                                        </p>
                                        <div className="flex items-start gap-3 mb-2">
                                            {item.logo && (
                                                <img src={item.logo} alt={item.organizacion} className="w-12 h-12 object-contain bg-white rounded p-1" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                            )}
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-white">{item.puesto}</h4>
                                                {item.url_organizacion ? (
                                                    <a href={item.url_organizacion} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-cyan-400 transition-colors">
                                                        {item.organizacion}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-300 font-medium">{item.organizacion}</p>
                                                )}
                                            </div>
                                        </div>
                                        {item.descripcion && <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.descripcion}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subsección: EXPERIENCIA LABORAL */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-violet-400 mb-6 border-b border-violet-500/30 pb-2 flex items-center gap-2">
                                <span className="text-2xl">💼</span> Experiencia laboral
                            </h3>

                            {/* Una sola columna */}
                            <div className="space-y-6">
                                {sortedExperience.map((item, index) => (
                                    <ExperienceCard key={index} item={item} />
                                ))}
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
}

export default Experience;
