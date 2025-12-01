import { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { getAssetPath } from '../utils/assets';

function ProjectHerramientasBaremacion() {
    const project = projectsData.find(p => p.url === '/proyecto-herramientas-baremacion-ull');
    const habilidadesTecnicas = project?.tecnologias || [];
    const competencias = project?.competencias || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="relative rounded-2xl overflow-hidden mb-8 h-96 shadow-2xl">
                <img src={getAssetPath("/herramientas-baremacion-ull.png")} alt="Herramientas de Baremación ULL" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                    <div id="tecnologias-container" className="flex flex-wrap gap-2 mb-4">
                        {habilidadesTecnicas.map((tech, index) => (
                            <span key={`tech-${index}`} className="text-xs font-medium px-2.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-500/30">
                                {tech}
                            </span>
                        ))}
                        {competencias.map((comp, index) => (
                            <span key={`comp-${index}`} className="text-xs font-medium px-2.5 py-0.5 rounded bg-violet-900/50 text-violet-300 border border-violet-500/30">
                                {comp}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-300 text-lg">Ecosistema de herramientas para la gestión y baremación de plazas de
                        profesorado en la ULL</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Descripción y Evolución del Proyecto</h2>
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 opacity-30"></div>

                            {/* Step 1 (Violet) */}
                            <div className="relative pl-12 pb-5">
                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 rounded-full border-2 border-violet-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                                    <span className="text-violet-500 text-xs font-bold">1</span>
                                </div>
                                <h3 className="text-lg font-semibold text-violet-400 mb-2">Inexistencia de estándar (hasta mayo 19)</h3>
                                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                                    La Baremación en la Universidad de La Laguna (ULL) requiere un cumplimiento normativo
                                    riguroso a efectos de garantizar la objetividad, transparencia y exactitud de los
                                    concursos de contratación de plazas de profesorado. Hasta el año 2019, no existía un
                                    formato estandarizado de recepción de los resultados, lo que suponía una carga de
                                    trabajo adicional para comprobar el cumplimiento de la norma y una falta de homogeneidad
                                    en la documentación administrativa.
                                </p>
                            </div>

                            {/* Step 2 (Cyan) */}
                            <div className="relative pl-12 pb-5">
                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 rounded-full border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                    <span className="text-cyan-500 text-xs font-bold">2</span>
                                </div>
                                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Herramienta interna (mayo 2019)</h3>
                                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                                    Para solucionar esto, se desarrolló una plantilla de baremación en Excel, inicialmente a
                                    nivel interno, para optimizar los procesos de revisión. Esta primera versión permitió
                                    establecer las bases del cálculo automatizado y la validación normativa.
                                </p>
                            </div>

                            {/* Step 3 (Violet) */}
                            <div className="relative pl-12 pb-5">
                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 rounded-full border-2 border-violet-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                                    <span className="text-violet-500 text-xs font-bold">3</span>
                                </div>
                                <h3 className="text-lg font-semibold text-violet-400 mb-2">Extrapolación a Comisiones (marzo 2021)</h3>
                                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                                    Posteriormente, esta herramienta se escaló para ser utilizada como herramienta única por
                                    parte de las Comisiones, optimizando los procesos de arbitraje del Vicerrectorado y
                                    estandarizando tanto la baremación como la documentación procesada.
                                </p>
                            </div>

                            {/* Step 4 (Cyan) */}
                            <div className="relative pl-12 pb-5">
                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 rounded-full border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                    <span className="text-cyan-500 text-xs font-bold">4</span>
                                </div>
                                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Segmentación para Candidaturas (noviembre 2023)</h3>
                                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                                    Más adelante, se optimizó el flujo de trabajo separando la herramienta en dos
                                    herramientas vinculadas (Candidaturas y Comisiones), permitiendo aprovechar la
                                    declaración digital de méritos de las candidaturas y eliminando la necesidad de
                                    transcripción manual de las Comisiones.
                                </p>
                            </div>

                            {/* Step 5 (Violet) */}
                            <div className="relative pl-12 pb-5">
                                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 rounded-full border-2 border-violet-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                                    <span className="text-violet-500 text-xs font-bold">5</span>
                                </div>
                                <h3 className="text-lg font-semibold text-violet-400 mb-2">Soporte</h3>
                                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                                    Asimismo, se desarrolló un ecosistema de soporte integral con webs de asistencia, manuales,
                                    guías, videotutoriales, preguntas frecuentes y control de versiones. El soporte se gestiona
                                    a través de email, formularios y la plataforma de ticketing GLPI.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Características Principales</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    ⚖️</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cumplimiento Normativo</h3>
                                    <p className="text-sm text-gray-400">Garantía de objetividad y transparencia en concursos</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    ⚡</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Optimización de Procesos</h3>
                                    <p className="text-sm text-gray-400">Eliminación de tareas adicionales y transcripción manual</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📊</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Estandarización</h3>
                                    <p className="text-sm text-gray-400">Formato único para stakeholders</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📚</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Soporte Integral</h3>
                                    <p className="text-sm text-gray-400">Webs de ayuda, manuales y videotutoriales</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🎫</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Gestión de Incidencias</h3>
                                    <p className="text-sm text-gray-400">Soporte vía Email, Formularios y GLPI</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🔄</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Mejora Continua</h3>
                                    <p className="text-sm text-gray-400">Control de versiones y feedback constante</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Impacto e Implementación</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-violet-400 mb-2">Estandarización Administrativa</h3>
                                <p className="text-gray-300 text-sm text-justify">
                                    Unificación de criterios y formatos de presentación de resultados, facilitando la
                                    revisión administrativa y reduciendo errores en la documentación oficial de los
                                    concursos.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-violet-400 mb-2">Eficiencia Operativa</h3>
                                <p className="text-gray-300 text-sm text-justify">
                                    Reducción significativa de la carga de trabajo tanto para las Comisiones de Selección
                                    como para el personal del Vicerrectorado y el Servicio de Recursos Humanos, al
                                    automatizar cálculos y optimizar la generación documental.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-violet-400 mb-2">Ecosistema de Ayuda</h3>
                                <p className="text-gray-300 text-sm text-justify">
                                    Despliegue de recursos de autoayuda y canales de soporte estructurados, empoderando a
                                    los usuarios y agilizando la resolución de dudas técnicas y procedimentales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-cyan-600 to-violet-600 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Datos Clave</h3>
                        <div className="space-y-3">
                            <div>
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm opacity-90">Cumplimiento Normativo</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">+50</div>
                                <div className="text-sm opacity-90">Iteración continua con más de 50 versiones, a nivel
                                    histórico, entre ambas herramientas</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">Soporte Integral</div>
                                <div className="text-sm opacity-90">Soporte Técnico y Jurídico (webs de ayuda, manuales,
                                    videotutoriales, GLPI, Email y Formularios)</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">Implementación institucional</div>
                                <div className="text-sm opacity-90">Implementación para todos los concursos de PDI laboral de la
                                    ULL</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">3</div>
                                <div className="text-sm opacity-90">Adaptaciones normativas generales además de adaptaciones
                                    menores</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Información</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="text-gray-400">Cliente</div>
                                <div className="font-semibold">Universidad de La Laguna</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Rol</div>
                                <div className="font-semibold">Dirección, Desarrollo, Diseño, Implementación y Soporte</div>
                            </div>
                            <div>
                                <div className="text-gray-400 mb-2">Habilidades técnicas</div>
                                <div className="flex flex-wrap gap-2">
                                    {habilidadesTecnicas.map((tech, index) => (
                                        <span key={`tech-info-${index}`} className="text-xs px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-300 border border-cyan-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-400 mb-2">Competencias</div>
                                <div className="flex flex-wrap gap-2">
                                    {competencias.map((comp, index) => (
                                        <span key={`comp-info-${index}`} className="text-xs px-2 py-0.5 rounded bg-violet-900/30 text-violet-300 border border-violet-500/20">
                                            {comp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-400">Estado</div>
                                <div className="font-semibold text-green-400">En producción</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Enlaces</h3>
                        <div className="space-y-2">
                            <a href="https://sites.google.com/ull.edu.es/baremacion-candidaturas" target="_blank"
                                className="block px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-center transition-colors">Web
                                Candidaturas</a>
                            <a href="https://sites.google.com/ull.edu.es/baremacion-comisiones" target="_blank"
                                className="block px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-center transition-colors">Web
                                Comisiones</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectHerramientasBaremacion;
