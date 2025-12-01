import { useState } from 'react';
import type { VolunteeringItem } from '../types';

interface VolunteeringProps {
  items: VolunteeringItem[];
}

function Volunteering({ items }: VolunteeringProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section id="volunteering" className="py-16 md:py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-12 -mx-6 px-6 border-b border-violet-500/10 transition-all duration-300">
          <div
            className="flex items-center justify-center gap-4 cursor-pointer group"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Voluntariado</h2>
            <button className="text-3xl text-violet-400 group-hover:text-cyan-400 transition-colors">
              {isCollapsed ? '▼' : '▲'}
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Header con logo y título */}
                <div className="flex items-start gap-3 mb-3">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.organizacion}
                      className="w-12 h-12 object-contain bg-white rounded p-1 flex-shrink-0"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.puesto}
                    </h3>
                    {item.url_organizacion ? (
                      <a
                        href={item.url_organizacion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-blue-400 transition-colors block"
                      >
                        {item.organizacion}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{item.organizacion}</p>
                    )}
                  </div>
                </div>

                {/* Footer con fechas */}
                <div className="flex justify-between items-center text-sm mt-3 pt-3 border-t border-gray-700">
                  <p className="text-cyan-400 font-mono text-xs">
                    {new Date(item.fecha_inicio).getFullYear()} - {item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : 'Actualidad'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Volunteering;