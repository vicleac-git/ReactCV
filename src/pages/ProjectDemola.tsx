import { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { getAssetPath } from '../utils/assets';

function ProjectDemola() {
    const project = projectsData.find(p => p.url === '/proyecto-demola-canarias');
    const habilidadesTecnicas = project?.tecnologias || [];
    const competencias = project?.competencias || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="relative rounded-2xl overflow-hidden mb-8 h-96 shadow-2xl">
                <img src={getAssetPath("/demola-canarias.jpg")} alt="DEMOLA Canarias - Foto oficial del evento" className="w-full h-full object-cover" />
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
                    <p className="text-gray-300 text-lg">Programa de innovación colaborativa universidad-empresa | Reto: Retención y atracción de talento en Canarias</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sobre DEMOLA Canarias</h2>
                        <p className="text-gray-300 leading-relaxed mb-4 text-justify"> <strong>DEMOLA</strong> es un modelo de
                            innovación abierta nacido en Finlandia y extendido a 14 países de Europa, África y
                            Latinoamérica. Implantado en Canarias desde 2015, el programa tiene como objetivo fomentar la
                            cultura innovadora en el Archipiélago, conectando la Universidad con los sectores productivos
                            para desarrollar soluciones a medida de las necesidades de empresas y organizaciones. </p>
                        <p className="text-gray-300 leading-relaxed text-justify"> A lo largo de sus cuatro temporadas, DEMOLA
                            Canarias ha abordado <strong>46 proyectos</strong> con la participación de cerca de <strong>200
                                universitarios</strong> de diferentes disciplinas de la Universidad de La Laguna (ULL) y la
                            Universidad de Las Palmas de Gran Canaria (ULPGC). </p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Reto ITOP Consulting</h2>
                        <p className="text-gray-300 leading-relaxed mb-4 text-justify"> Como parte de la cuarta temporada de
                            DEMOLA Canarias (marzo-julio 2017), participé en el equipo multidisciplinar que trabajó en el
                            reto propuesto por <strong>ITOP Consulting</strong>: <em>"Retención y atracción de talento en
                                Canarias" </em>. </p>
                        <p className="text-gray-300 leading-relaxed mb-4 text-justify"> El proyecto consistió en investigar y
                            desarrollar soluciones innovadoras para abordar el problema de la fuga de talento en las Islas
                            Canarias, identificando factores clave que motivan a los jóvenes profesionales cualificados a
                            quedarse o marcharse del archipiélago. </p>
                        <p className="text-gray-300 leading-relaxed text-justify"> Mediante la utilización del cuestionario
                            <strong>Job Diagnostic Survey (JDS)</strong>,
                            diseñado para diagnosticar las características de un puesto de trabajo y determinar cómo podría
                            rediseñarse para mejorar la motivación y la satisfacción de los empleados, junto a otras
                            técnicas de investigación cualitativa como entrevistas, análisis de datos demográficos y
                            económicos y sesiones de co-creación, desarrollamos una "demo" con propuestas concretas y
                            accionables para <strong>ITOP Consulting</strong>.
                        </p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Proceso de Trabajo</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    1</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Investigación inicial</h3>
                                    <p className="text-sm text-gray-400 text-justify"> Pase del cuestionario Job Diagnostic
                                        Survey (JDS) a una muestra representativa de empleados actuales y antiguos de ITOP
                                        Consulting. Entrevistas en profundidad con personal de ITOP Consulting: mandos
                                        directivos,
                                        empleados actuales y antiguos. Análisis de estudios sobre migración de talento,
                                        identificación de pain points y motivaciones clave. </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    2</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Definición del problema</h3>
                                    <p className="text-sm text-gray-400 text-justify"> Síntesis de insights y definición clara
                                        del desafío a abordar. </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    3</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Ideación y Co-creación</h3>
                                    <p className="text-sm text-gray-400 text-justify"> Sesiones de brainstorming
                                        multidisciplinar, técnicas de pensamiento lateral,
                                        selección y refinamiento de las ideas más prometedoras. </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    4</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Prototipado y Validación</h3>
                                    <p className="text-sm text-gray-400 text-justify"> Desarrollo de prototipos de baja
                                        fidelidad, validación con stakeholders,
                                        iteración basada en feedback, preparación de la demo final. </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                    5</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Presentación Final</h3>
                                    <p className="text-sm text-gray-400 text-justify"> Exposición de resultados ante ITOP
                                        Consulting, ACIISI y Universidad de La Laguna en el acto de clausura en la Facultad
                                        de Economía, Empresa y Turismo (julio 2017). </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resultados y Aprendizajes</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    💡</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Innovación Colaborativa</h3>
                                    <p className="text-sm text-gray-400">Experiencia práctica en metodologías de innovación
                                        abierta</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    👥</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Trabajo Multidisciplinar</h3>
                                    <p className="text-sm text-gray-400">Colaboración con estudiantes de diferentes titulaciones
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🎯</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Enfoque en Usuario</h3>
                                    <p className="text-sm text-gray-400">Investigación cualitativa y diseño centrado en personas
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🏢</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Conexión Universidad-Empresa</h3>
                                    <p className="text-sm text-gray-400">Resolución de desafíos reales para el sector
                                        empresarial</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    🚀</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cultura Emprendedora</h3>
                                    <p className="text-sm text-gray-400">Desarrollo de mentalidad innovadora y proactiva</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    📊</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Presentación Profesional</h3>
                                    <p className="text-sm text-gray-400">Comunicación efectiva de resultados ante stakeholders
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Datos del Programa</h3>
                        <div className="space-y-3">
                            <div>
                                <div className="text-3xl font-bold">46</div>
                                <div className="text-sm opacity-90">Proyectos totales</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">200+</div>
                                <div className="text-sm opacity-90">Universitarios participantes</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">15</div>
                                <div className="text-sm opacity-90">Retos en 4ª temporada</div>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-3xl font-bold">14</div>
                                <div className="text-sm opacity-90">Países en red DEMOLA</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Información</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="text-gray-400">Programa</div>
                                <div className="font-semibold">DEMOLA Canarias</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Temporada</div>
                                <div className="font-semibold">4ª edición (2017)</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Empresa</div>
                                <div className="font-semibold">ITOP Consulting</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Universidad</div>
                                <div className="font-semibold">Universidad de La Laguna</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Duración</div>
                                <div className="font-semibold">4 meses (marzo-julio)</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Equipo</div>
                                <div className="font-semibold">Equipo multidisciplinar</div>
                            </div>
                            <div>
                                <div className="text-gray-400">Rol</div>
                                <div className="font-semibold">Research & Ideation</div>
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
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Organizadores</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="text-gray-400 mb-1">ACIISI</div>
                                <p className="text-xs text-gray-500">Agencia Canaria de Investigación, Innovación y Sociedad de
                                    la Información</p>
                            </div>
                            <div>
                                <div className="text-gray-400 mb-1">Gobierno de Canarias</div>
                                <p className="text-xs text-gray-500">Consejería de Economía, Industria, Comercio y Conocimiento
                                </p>
                            </div>
                            <div>
                                <div className="text-gray-400 mb-1">ITC</div>
                                <p className="text-xs text-gray-500">Instituto Tecnológico de Canarias (Operador DEMOLA)</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                        <h3 className="font-bold text-lg mb-4">Enlaces</h3>
                        <div className="space-y-2"> <a
                            href="https://www.ull.es/portal/noticias/2017/cierre-demola-canarias-ull/" target="_blank"
                            className="block px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-center transition-colors text-sm">
                            Noticia Oficial ULL </a> </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDemola;
