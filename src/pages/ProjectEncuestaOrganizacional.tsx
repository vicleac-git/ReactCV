import { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { getAssetPath } from '../utils/assets';

function ProjectEncuestaOrganizacional() {
    const project = projectsData.find(p => p.url === '/proyecto-encuesta-organizacional');
    const habilidadesTecnicas = project?.tecnologias || [];
    const competencias = project?.competencias || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="relative rounded-2xl overflow-hidden mb-8 h-96 shadow-2xl">
                <img src={getAssetPath("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop")}
                    alt="Encuesta Organizacional" className="w-full h-full object-cover" />
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
                    <p className="text-gray-300 text-lg">Desarrollo y análisis de encuesta organizacional para empresa con +30
                        centros y 700 empleados</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Descripción del Proyecto</h2>
                        <p className="text-gray-300 leading-relaxed mb-4 text-justify">Proyecto integral de
                            <strong>análisis organizacional</strong> para una empresa multi-sede con más de 700 empleados
                            distribuidos en 30 centros de trabajo. Diseño completo de encuesta online orientada a medir
                            clima laboral,
                            satisfacción y áreas de mejora organizacional.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-justify"><strong>Gestión end-to-end:
                        </strong> desde el diseño del cuestionario y pase de pruebas piloto,
                            hasta el análisis estadístico avanzado y la elaboración de informes estratégicos. Segmentación
                            de datos por centros, departamentos y variables clave para identificar tendencias y
                            oportunidades de mejora. Presentación de resultados con visualizaciones interactivas para
                            facilitar la toma de decisiones ejecutivas. </p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Fases del Proyecto</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    ✏️</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Diseño</h3>
                                    <p className="text-sm text-gray-400">Desarrollo de encuesta online personalizada</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🧪</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Testing</h3>
                                    <p className="text-sm text-gray-400">Ejecución del pase de pruebas piloto</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📊</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Análisis</h3>
                                    <p className="text-sm text-gray-400">Análisis estadístico de resultados</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📈</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Reporting</h3>
                                    <p className="text-sm text-gray-400">Informes estratégicos con segmentación de datos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Metodología y Herramientas</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-cyan-400 mb-2">Diseño y Recolección</h3>
                                <p className="text-gray-300 text-sm text-justify"> Diseño de cuestionario
                                    estructurado utilizando Visio con lógica condicional y validaciones. Configuración de
                                    accesos seguros y seguimiento de tasas de respuesta. Gestión de campaña de comunicación
                                    para maximizar la participación. </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-cyan-400 mb-2">Análisis Estadístico</h3>
                                <p className="text-gray-300 text-sm text-justify"> Procesamiento de datos con
                                    Excel y SPSS. Análisis descriptivo, correlacional y de tendencias. Segmentación
                                    multivariable por centro, antigüedad, departamento y perfil demográfico. Identificación
                                    de patrones y áreas críticas mediante análisis de frecuencias y cruces de variables.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-cyan-400 mb-2">Visualización y Reporting</h3>
                                <p className="text-gray-300 text-sm text-justify"> Creación de dashboards
                                    interactivos en Excel con KPIs clave de clima organizacional. Elaboración de informes
                                    ejecutivos en PowerPoint con insights accionables y recomendaciones estratégicas.
                                    Presentación de hallazgos a dirección con propuestas de planes de acción. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-violet-600 to-pink-600 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Datos Clave</h3>
                        <div className="space-y-3">
                            <div>
                                <div className="text-3xl font-bold">700+</div>
                                <div className="text-sm opacity-90">Empleados encuestados</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">30+</div>
                                <div className="text-sm opacity-90">Centros de trabajo</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">82%</div>
                                <div className="text-sm opacity-90">Tasa de respuesta</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">50+</div>
                                <div className="text-sm opacity-90">Variables analizadas</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Información</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="text-gray-400">Empresa</div>
                                <div className="font-semibold">Dream Team Executive Search</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Rol</div>
                                <div className="font-semibold">Assistant de RRHH</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Duración</div>
                                <div className="font-semibold">1 mes</div>
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
                                <div className="font-semibold text-green-400">Completado</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectEncuestaOrganizacional;
