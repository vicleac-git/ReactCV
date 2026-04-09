import { useState, useMemo } from 'react';
import type { ExperienceItem, SkillItem } from '../types';

interface SkillsProps {
  experience?: ExperienceItem[]; // Kept for compatibility but not used
  skills?: SkillItem[];
}

// Mapping configuration for skills (Fallback logos)
const SKILL_MAPPING: Record<string, { logo: string }> = {
  // Development & Tools
  'Adobe Acrobat': { logo: 'https://cdn.simpleicons.org/adobeacrobatreader/EC1C24' },
  'CSS': { logo: 'https://cdn.simpleicons.org/css3/1572B6' },
  'Django': { logo: 'https://cdn.simpleicons.org/django/092E20' },
  'Dropbox': { logo: 'https://cdn.simpleicons.org/dropbox/0061FF' },
  'Git': { logo: 'https://cdn.simpleicons.org/git/F05032' },
  'GitHub': { logo: 'https://cdn.simpleicons.org/github/white' },
  'Google Apps Script': { logo: 'https://cdn.simpleicons.org/googleappsscript/4285F4' },
  'HTML': { logo: 'https://cdn.simpleicons.org/html5/E34F26' },
  'JavaScript': { logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  'Kdenlive': { logo: 'https://cdn.simpleicons.org/kdenlive/83B0F5' },
  'Looker Studio': { logo: 'https://cdn.simpleicons.org/looker/4285F4' },
  'Microsoft Office': { logo: 'https://cdn.simpleicons.org/microsoftoffice/D83B01' },
  'Next.js': { logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
  'Node.js': { logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  'Photoshop': { logo: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF' },
  'Python': { logo: 'https://cdn.simpleicons.org/python/3776AB' },
  'React': { logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  'TypeScript': { logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  'Tailwind CSS': { logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  'SQL': { logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  'Excel': { logo: 'https://cdn.simpleicons.org/microsoftexcel/217346' },
  'Power BI': { logo: 'https://cdn.simpleicons.org/powerbi/F2C811' },
  'Tableau': { logo: 'https://cdn.simpleicons.org/tableau/E97627' },
  'Google Sheets': { logo: 'https://cdn.simpleicons.org/googlesheets/34A853' },
  'Google Analytics': { logo: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
  'Figma': { logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
  'Adobe XD': { logo: 'https://cdn.simpleicons.org/adobexd/FF61F6' },
  'Illustrator': { logo: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00' },
  'Canva': { logo: 'https://cdn.simpleicons.org/canva/00C4CC' },
  'Notion': { logo: 'https://cdn.simpleicons.org/notion/white' },
  'Trello': { logo: 'https://cdn.simpleicons.org/trello/0079BF' },
  'Slack': { logo: 'https://cdn.simpleicons.org/slack/4A154B' },
  'Jira': { logo: 'https://cdn.simpleicons.org/jira/0052CC' },
  'VBA': { logo: 'https://cdn.simpleicons.org/vba/47A141' },
  'SPSS': { logo: 'https://cdn.simpleicons.org/ibm/052FAD' },
  'PowerPoint': { logo: 'https://cdn.simpleicons.org/microsoftpowerpoint/B7472A' },
  'Word': { logo: 'https://cdn.simpleicons.org/microsoftword/2B579A' },
  'Google Forms': { logo: 'https://cdn.simpleicons.org/googleforms/7248B9' },
  'Google Drive': { logo: 'https://cdn.simpleicons.org/googledrive/1FA463' },
  'OneDrive': { logo: 'https://cdn.simpleicons.org/onedrive/0078D4' },
  'Survio': { logo: 'https://cdn.simpleicons.org/survio/000000' },
  'GLPI': { logo: 'https://cdn.simpleicons.org/glpi/F46D11' },
  'Prezi': { logo: 'https://cdn.simpleicons.org/prezi/318CE7' },
  'Zoom': { logo: 'https://cdn.simpleicons.org/zoom/2D8CFF' },
  'Teams': { logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7' },
};

const DEFAULT_LOGO = 'https://cdn.simpleicons.org/codepen/white';

const SOFT_SKILLS = [
  {
    name: 'Adaptabilidad',
    icon: (
      <svg className="w-full h-full text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    name: 'Asertividad',
    icon: (
      <svg className="w-full h-full text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Atención al detalle',
    icon: (
      <svg className="w-full h-full text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    name: 'Comunicación',
    icon: (
      <svg className="w-full h-full text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    name: 'Creatividad',
    icon: (
      <svg className="w-full h-full text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    name: 'Gestión del tiempo',
    icon: (
      <svg className="w-full h-full text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Liderazgo',
    icon: (
      <svg className="w-full h-full text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: 'Mejora continua',
    icon: (
      <svg className="w-full h-full text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    name: 'Proactividad',
    icon: (
      <svg className="w-full h-full text-fuchsia-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Resolución de problemas',
    icon: (
      <svg className="w-full h-full text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    name: 'Trabajo en equipo',
    icon: (
      <svg className="w-full h-full text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'Visión estratégica',
    icon: (
      <svg className="w-full h-full text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

function Skills({ skills = [] }: SkillsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Process skills: sort alphabetically
  const sortedSkills = useMemo(() => {
    return [...skills].sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [skills]);

  const getLogo = (skill: SkillItem) => {
    // 1. Try API logo
    if (skill.icono && skill.icono.trim() !== '') {
      return skill.icono;
    }

    // 2. Try Mapping
    const mapping = Object.entries(SKILL_MAPPING).find(([key]) =>
      key.toLowerCase() === skill.nombre.toLowerCase()
    );

    if (mapping) {
      return mapping[1].logo;
    }

    // 3. Fallback
    return DEFAULT_LOGO;
  };

  const renderSkillLevel = (level: string) => {
    const numLevel = Math.min(Math.max(parseInt(level, 10) || 0, 0), 5);
    const percentage = (numLevel / 5) * 100;

    return (
      <div className="w-full mt-3 px-1" title={`Nivel: ${numLevel}/5`}>
        <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-6 md:py-10 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 z-10">
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-12 -mx-6 px-6 border-b border-violet-500/10 transition-all duration-300">
          <div
            className="flex items-center justify-center gap-4 cursor-pointer group"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Habilidades</h2>
            <button className="text-3xl text-violet-400 group-hover:text-cyan-400 transition-colors">
              {isCollapsed ? '▼' : '▲'}
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <div className="space-y-12">
            {/* Technical Skills Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300">
              <div className="mb-6 border-b border-cyan-500/20 pb-2">
                <h3 className="text-xl font-semibold text-cyan-300 inline-block">
                  Habilidades técnicas
                </h3>
              </div>

              {sortedSkills.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {sortedSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group h-40 [perspective:1000px] hover:-translate-y-1 transition-transform duration-300"
                    >
                      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front Face */}
                        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-cyan-900/20 transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center shadow-lg">
                          <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-950/50 rounded-lg transition-transform duration-300">
                            <img
                              src={getLogo(skill)}
                              alt={skill.nombre}
                              className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100"
                              loading="lazy"
                              onError={(e) => { e.currentTarget.src = DEFAULT_LOGO; }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                            {skill.nombre}
                          </span>
                          {/* Render skill level dots if level is present */}
                          <div className="w-full">
                            {skill.nivel && renderSkillLevel(skill.nivel)}
                          </div>
                        </div>

                        {/* Back Face */}
                        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-slate-800 p-4 rounded-xl border border-cyan-500/50 flex flex-col items-center justify-center text-center shadow-xl bg-gradient-to-br from-slate-800 to-slate-900">
                          <h4 className="text-cyan-400 text-xs font-bold mb-2 uppercase tracking-wider">Detalle</h4>
                          <p className="text-xs text-gray-300 leading-relaxed overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent px-1">
                            {skill.detalle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 py-12">
                  No se encontraron habilidades técnicas.
                </p>
              )}
            </div>

            {/* Soft Skills Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-violet-500/10 hover:border-violet-500/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-violet-300 mb-6 border-b border-violet-500/20 pb-2 inline-block">
                Habilidades transversales
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {SOFT_SKILLS.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-violet-500/50 hover:bg-violet-900/20 transition-all duration-300 group flex flex-col items-center gap-3 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-950/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;