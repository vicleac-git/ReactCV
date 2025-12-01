import { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { getAssetPath } from '../utils/assets';

function ProjectConsultaUll() {
    const project = projectsData.find(p => p.url === '/proyecto-consulta-ull');
    const habilidadesTecnicas = project?.tecnologias || [];
    const competencias = project?.competencias || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="relative rounded-2xl overflow-hidden mb-8 h-96 shadow-2xl">
                <img src={getAssetPath("/consulta-plazas-ull.png")} alt="Sistema de gestión de plazas de profesorado" className="w-full h-full object-cover" />
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
                    <p className="text-gray-300 text-lg">Sistema integral de gestión y seguimiento de plazas de profesorado para el Vicerrectorado de la ULL</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Descripción del Proyecto</h2>
                        <p className="text-gray-300 leading-relaxed mb-4 text-justify">Sistema de gestión de
                            base de datos desarrollado para el <strong>Vicerrectorado con competencias en materia de
                                profesorado de la Universidad de La Laguna</strong>,
                            con el objetivo de solventar déficits en el seguimiento y control de plazas de profesorado. </p>
                        <p className="text-gray-300 leading-relaxed text-justify">El sistema permite
                            <strong>registrar y hacer seguimiento</strong> del estado de las solicitudes de plazas desde su
                            presentación inicial hasta su posterior firma o cese,
                            implementando un alto nivel de automatización en las mecánicas y controles de la base de datos.
                            Además,
                            el sistema es <strong>clave en la precisión de los cálculos de necesidad de
                                profesorado</strong> efectuados en la toma de decisiones de contratación.
                        </p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Evolución del Sistema</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    1</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Fase Excel - Automatización Inicial</h3>
                                    <p className="text-sm text-gray-400 text-justify">Desarrollo de base de datos en
                                        <strong>Microsoft Excel</strong> con la estructura inicial con fórmulas avanzadas.
                                        Implementación de automatización para registro de estados,
                                        validaciones de datos,
                                        y generación de informes. Controles automáticos de coherencia y alertas para la
                                        gestión.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    2</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Migración a Google Sheets</h3>
                                    <p className="text-sm text-gray-400 text-justify">Migración completa de Excel a
                                        <strong>Google Sheets</strong> para mejorar el entorno colaborativo y la
                                        accesibilidad del equipo. Desarrollo de scripts con <strong>Apps Script</strong> para
                                        añadir funcionalidades (ej: envío de emails). Mejora en la explotación de informes
                                        internos,
                                        mediante integración con otras herramientas de Google Workspace.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    3</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Desarrollo Web de Consulta</h3>
                                    <p className="text-sm text-gray-400 text-justify">Implementación de plataforma web de acceso
                                        a la información con <strong>segmentación de permisos</strong> para personal externo
                                        al equipo de trabajo. Desarrollo de <strong>cuadros de mando generales e
                                            individuales</strong> con visualización de datos en tiempo real. Interfaz
                                        desarrollada con Google Sites,
                                        Looker Studio, HTML,
                                        CSS y JavaScript para consulta ágil y transparente de información. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Funcionalidades Clave</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📋</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Registro de Solicitudes</h3>
                                    <p className="text-sm text-gray-400">Control completo desde la solicitud inicial hasta la
                                        firma o cese </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    ⚙️</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Automatización Avanzada</h3>
                                    <p className="text-sm text-gray-400">Conexiones,
                                        validaciones,
                                        cálculos y controles automáticos</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    👥</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Trabajo Colaborativo</h3>
                                    <p className="text-sm text-gray-400">Acceso simultáneo y sincronización en tiempo real</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📊</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cuadros de Mando</h3>
                                    <p className="text-sm text-gray-400">Visualización de datos y KPIs en dashboards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🔒</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Segmentación de Acceso</h3>
                                    <p className="text-sm text-gray-400">Permisos diferenciados según perfil de usuario</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📈</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cálculos de Necesidad</h3>
                                    <p className="text-sm text-gray-400">Soporte a decisiones de contratación de profesorado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Impacto y Resultados</h2>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="text-violet-400 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-300 text-sm text-justify"><strong>Mayor
                                    transparencia</strong> en la gestión de plazas de profesorado,
                                    permitiendo visibilidad completa del proceso </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-violet-400 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-300 text-sm text-justify"><strong>Reducción de
                                    errores</strong> mediante automatización de controles y validaciones de datos </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-violet-400 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-300 text-sm text-justify"><strong>Mejora en la toma de
                                    decisiones</strong> gracias a cálculos precisos de necesidades de profesorado </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-violet-400 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-300 text-sm text-justify"><strong>Acceso democrático a
                                    la información</strong> para personal externo mediante plataforma web segura </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-violet-400 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-300 text-sm text-justify"><strong>Optimización del
                                    trabajo colaborativo</strong> del equipo del Vicerrectorado en tiempo real </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-violet-400 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-300 text-sm text-justify">
                                    <strong>Automatizaciones</strong> de tareas repetitivas en la gestión relacionada
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Datos Clave</h3>
                        <div className="space-y-3">
                            <div>
                                <div className="text-3xl font-bold">3</div>
                                <div className="text-sm opacity-90">Fases de evolución</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">Alto grado</div>
                                <div className="text-sm opacity-90">Automatización</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">Web</div>
                                <div className="text-sm opacity-90">Acceso externo</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">Tiempo Real</div>
                                <div className="text-sm opacity-90">Colaboración</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Información</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="text-gray-400">Institución</div>
                                <div className="font-semibold">Universidad de La Laguna</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Área</div>
                                <div className="font-semibold">Vicerrectorado de Profesorado</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Tipo</div>
                                <div className="font-semibold">Base de datos+Web de consulta</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Alcance</div>
                                <div className="font-semibold">Gestión integral de plazas</div>
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
                        <div className="space-y-2"><a href="https://sites.google.com/ull.edu.es/consulta-plazas-pdi"
                            target="_blank"
                            className="block px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-center transition-colors text-sm">Web
                            pública </a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectConsultaUll;
