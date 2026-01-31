export interface Profile {
    nombre: string;
    titulo: string;
    resumen: string;
    email: string;
    linkedin: string;
    github: string;
    foto: string;
}

export interface ExperienceItem {
    puesto: string;
    empresa: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    logo?: string;
    url_empresa?: string;
    herramientas?: string;
    detalle_extendido?: string;
}

export interface EducationItem {
    puesto: string;
    organizacion: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion?: string;
    logo?: string;
    url_organizacion?: string;
}

export interface ComplementaryTrainingItem {
    puesto: string;
    organizacion: string;
    fecha_inicio: string;
    fecha_fin: string;
    logo?: string;
    url_organizacion?: string;
    horas?: number;
}

export interface OtherExperienceItem {
    puesto: string;
    organizacion: string;
    fecha_inicio: string;
    fecha_fin: string;
    logo?: string;
    url_organizacion?: string;
    descripcion?: string;
}

export interface SkillItem {
    nombre: string;
    nivel: string;
    icono?: string; // SVG path or url
    detalle?: string;
}

export interface ProjectItem {
    titulo: string;
    descripcion: string;
    imagen: string;
    url: string;
    tecnologias: string[];
    competencias?: string[];
}

export interface ResumeData {
    perfil: Profile;
    experiencia: ExperienceItem[];
    formacion: EducationItem[];
    formacionComplementaria: ComplementaryTrainingItem[];
    otraExperiencia: OtherExperienceItem[];
    habilidades: SkillItem[];
    proyectos: ProjectItem[];
}
