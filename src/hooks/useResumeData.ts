import { useState, useEffect } from 'react';
import type { ResumeData } from '../types';
import { projectsData as staticProjects } from '../data/projects';
import { getAssetPath } from '../utils/assets';

const API_URL = import.meta.env.VITE_API_URL;

export function useResumeData() {
    const [data, setData] = useState<ResumeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Helper function to format extended details
    const formatExtendedDetails = (text: string): string => {
        if (!text) return '';

        const lines = text.split('\n');
        let html = '';
        let inList = false;

        lines.forEach(line => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return;

            // Resaltar palabras en MAYÚSCULAS (de 3 o más letras)
            const highlightCaps = (str: string) => str.replace(/\b([A-ZÁÉÍÓÚÑ]{3,}(?:\s+[A-ZÁÉÍÓÚÑ]{2,})*)\b/g, 
                '<span class="text-cyan-400 font-bold tracking-tight">$1</span>'
            );

            if (trimmedLine.startsWith('•')) {
                if (!inList) {
                    html += '<ul class="list-none space-y-1 mb-4">';
                    inList = true;
                }

                // Remove bullet and split by colon
                const content = trimmedLine.substring(1).trim();
                const colonIndex = content.indexOf(':');

                if (colonIndex !== -1) {
                    const concept = content.substring(0, colonIndex + 1); // Include colon
                    const description = highlightCaps(content.substring(colonIndex + 1));
                    html += `<li class="text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full before:shadow-[0_0_8px_#22d3ee]"><strong class="text-white font-semibold">${concept}</strong>${description}</li>`;
                } else {
                    html += `<li class="text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full before:shadow-[0_0_8px_#22d3ee]">${highlightCaps(content)}</li>`;
                }
            } else {
                // Close list if open
                if (inList) {
                    html += '</ul>';
                    inList = false;
                }
                // It's a header (emoji line)
                html += `<h4 class="text-lg font-bold text-violet-300 mt-6 mb-3 border-b border-violet-500/20 pb-1">${highlightCaps(trimmedLine)}</h4>`;
            }
        });

        if (inList) {
            html += '</ul>';
        }

        return html;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const rawData = await response.json();

                // The API returns an array where each item has properties directly (not nested in detalle)
                // Extract perfil (Resumen)
                const perfilItem = rawData.find((item: any) => item.tipo === 'Resumen');
                const perfilData = {
                    nombre: 'Víctor Leal Acosta',
                    titulo: 'Especialista en Recursos Humanos | Data Management',
                    resumen: perfilItem?.detalle || '',
                    email: 'vicleac@gmail.com',
                    linkedin: 'https://www.linkedin.com/in/vicleac/',
                    github: 'https://github.com/vicleac-git',
                    foto: getAssetPath('/profile.jpg')
                };

                // Extract experiencia profesional
                const experienciaData = rawData
                    .filter((item: any) => item.tipo === 'Profesional')
                    .map((item: any) => ({
                        puesto: item.puesto || '',
                        empresa: item.organizacion || '',
                        fecha_inicio: item.fecha_inicio || '',
                        fecha_fin: item.fecha_fin || '',
                        descripcion: item.detalle || '',
                        logo: item.logo,
                        url_empresa: item.url_organizacion,
                        herramientas: item.herramientas || '',
                        detalle_extendido: formatExtendedDetails(item.detalle_extendido || '')
                    }));

                // Extract formación reglada
                const formacionData = rawData
                    .filter((item: any) => item.tipo === 'Formación reglada')
                    .map((item: any) => ({
                        puesto: item.puesto || '',
                        organizacion: item.organizacion || '',
                        fecha_inicio: item.fecha_inicio || '',
                        fecha_fin: item.fecha_fin || '',
                        descripcion: item.detalle || '',
                        logo: item.logo,
                        url_organizacion: item.url_organizacion
                    }));

                // Extract formación complementaria
                const formacionComplementariaData = rawData
                    .filter((item: any) => item.tipo === 'Formación complementaria')
                    .map((item: any) => ({
                        puesto: item.puesto || '',
                        organizacion: item.organizacion || '',
                        fecha_inicio: item.fecha_inicio || '',
                        fecha_fin: item.fecha_fin || '',
                        logo: item.logo,
                        url_organizacion: item.url_organizacion,
                        horas: item.horas
                    }));

                // Extract otra experiencia
                const otraExperienciaData = rawData
                    .filter((item: any) => item.tipo === 'Otra experiencia')
                    .map((item: any) => ({
                        puesto: item.puesto || '',
                        organizacion: item.organizacion || '',
                        fecha_inicio: item.fecha_inicio || '',
                        fecha_fin: item.fecha_fin || '',
                        logo: item.logo,
                        url_organizacion: item.url_organizacion,
                        descripcion: item.detalle || ''
                    }));

                // Extract habilidades
                const habilidadesData = rawData
                    .filter((item: any) => item.tipo === 'Habilidad')
                    .map((item: any) => ({
                        nombre: item.puesto || '',
                        nivel: item.organizacion || '',
                        icono: item.logo,
                        detalle: item.detalle || ''
                    }));

                // Extract proyectos from API
                const apiProjects = rawData
                    .filter((item: any) => item.tipo === 'Proyecto')
                    .map((item: any) => ({
                        titulo: item.puesto || '',
                        descripcion: item.detalle || '',
                        imagen: item.logo || '',
                        url: item.url_organizacion || '',
                        tecnologias: item.herramientas ? item.herramientas.split(',').map((t: string) => t.trim()) : [],
                        competencias: item.competencias ? item.competencias.split(',').map((c: string) => c.trim()) : [],
                        organizacion: item.organizacion,
                        fecha_inicio: item.fecha_inicio,
                        fecha_fin: item.fecha_fin,
                        detalle_extendido: formatExtendedDetails(item.detalle_extendido || ''),
                        estado: item.horas // Reutilizamos 'horas' para el estado si prefieres
                    }));

                // Merge: API Projects + Static Projects (evitando duplicados por URL)
                const allProjects = [...apiProjects];
                staticProjects.forEach(staticProj => {
                    if (!allProjects.some(p => p.url === staticProj.url)) {
                        allProjects.push(staticProj);
                    }
                });

                const proyectosData = allProjects.map(project => ({
                    ...project,
                    imagen: getAssetPath(project.imagen)
                }));

                const transformedData: ResumeData = {
                    perfil: perfilData,
                    experiencia: experienciaData,
                    formacion: formacionData,
                    formacionComplementaria: formacionComplementariaData,
                    otraExperiencia: otraExperienciaData,
                    habilidades: habilidadesData,
                    proyectos: proyectosData
                };

                setData(transformedData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}
