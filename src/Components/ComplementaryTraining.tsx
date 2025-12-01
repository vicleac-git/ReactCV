import { useState, useMemo, useEffect } from 'react';
import type { ComplementaryTrainingItem } from '../types';

interface ComplementaryTrainingProps {
  items: ComplementaryTrainingItem[];
}

function ComplementaryTraining({ items }: ComplementaryTrainingProps) {
  // Calcular rango de años disponibles
  const yearRange = useMemo(() => {
    if (items.length === 0) return { min: new Date().getFullYear(), max: new Date().getFullYear() };

    const years = items.flatMap(item => {
      const start = new Date(item.fecha_inicio).getFullYear();
      const end = item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : new Date().getFullYear();
      return [start, end];
    });

    return {
      min: Math.min(...years),
      max: Math.max(...years)
    };
  }, [items]);

  const [yearFilterStart, setYearFilterStart] = useState(yearRange.min);
  const [yearFilterEnd, setYearFilterEnd] = useState(yearRange.max);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Estados de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Grid 3x3

  // Filtrar y ordenar items
  const filteredAndSortedItems = useMemo(() => {
    const filtered = items.filter(item => {
      const startYear = new Date(item.fecha_inicio).getFullYear();
      const endYear = item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : new Date().getFullYear();
      return (startYear <= yearFilterEnd && endYear >= yearFilterStart);
    });

    return filtered.sort((a, b) => {
      const dateA = new Date(a.fecha_inicio).getTime();
      const dateB = new Date(b.fecha_inicio).getTime();
      return dateB - dateA;
    });
  }, [items, yearFilterStart, yearFilterEnd]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredAndSortedItems.slice(startIndex, endIndex);

  // Resetear página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [yearFilterStart, yearFilterEnd]);

  return (
    <section id="complementary-training" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-8 -mx-6 px-6 border-b border-violet-500/10 transition-all duration-300">
          <div
            className="flex items-center justify-center gap-4 cursor-pointer group"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Formación complementaria
            </h2>
            <button className="text-3xl text-violet-400 group-hover:text-cyan-400 transition-colors">
              {isCollapsed ? '▼' : '▲'}
            </button>
          </div>
        </div>

        {!isCollapsed && (<>
          {/* Filtro de Rango de Años */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-2.5 md:p-3 rounded-lg shadow-lg border border-violet-500/10 mb-4">
            {/* Valores inline arriba del slider */}
            <div className="flex justify-between items-center mb-1.5 px-1">
              <span className="text-xs text-violet-400 font-mono font-bold">{yearFilterStart}</span>
              <span className="text-xs text-gray-400">—</span>
              <span className="text-xs text-cyan-400 font-mono font-bold">{yearFilterEnd}</span>
            </div>

            {/* Dual Range Slider Container - más compacto */}
            <div className="relative h-8 flex items-center">
              {/* Background Track */}
              <div className="absolute w-full h-2 bg-slate-700 rounded-lg" style={{ left: 0, right: 0 }} />

              {/* Active Range Track */}
              <div
                className="absolute h-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg"
                style={{
                  left: `calc(${((yearFilterStart - yearRange.min) / (yearRange.max - yearRange.min)) * 100}%)`,
                  right: `calc(${100 - ((yearFilterEnd - yearRange.min) / (yearRange.max - yearRange.min)) * 100}%)`
                }}
              />

              {/* Range Input para Año Inicio */}
              <input
                type="range"
                min={yearRange.min}
                max={yearRange.max}
                value={yearFilterStart}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (newValue <= yearFilterEnd) {
                    setYearFilterStart(newValue);
                  }
                }}
                className="absolute appearance-none bg-transparent pointer-events-none range-slider-thumb"
                style={{
                  width: 'calc(100% + 20px)',
                  marginLeft: '-10px',
                  zIndex: yearFilterStart > yearRange.min + (yearRange.max - yearRange.min) / 2 ? 5 : 3
                }}
              />

              {/* Range Input para Año Fin */}
              <input
                type="range"
                min={yearRange.min}
                max={yearRange.max}
                value={yearFilterEnd}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (newValue >= yearFilterStart) {
                    setYearFilterEnd(newValue);
                  }
                }}
                className="absolute appearance-none bg-transparent pointer-events-none range-slider-thumb"
                style={{
                  width: 'calc(100% + 20px)',
                  marginLeft: '-10px',
                  zIndex: yearFilterEnd < yearRange.min + (yearRange.max - yearRange.min) / 2 ? 5 : 3
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between mt-2">
              <div className="text-xs text-gray-400">
                <span className="text-green-400 font-bold">{startIndex + 1}-{Math.min(endIndex, filteredAndSortedItems.length)}</span> de <span className="text-gray-300 font-bold">{filteredAndSortedItems.length}</span>
              </div>
              <button
                onClick={() => {
                  setYearFilterStart(yearRange.min);
                  setYearFilterEnd(yearRange.max);
                }}
                className="px-3 py-1 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded transition-all duration-300 hover:shadow-violet-500/50 text-xs font-medium"
              >
                Resetear
              </button>
            </div>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paginatedItems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex-grow">
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
                      <div className="tooltip-container relative group">
                        <h3 className="text-base font-bold text-white mb-1 line-clamp-2">
                          {item.puesto}
                        </h3>
                        <div className="tooltip absolute bottom-full left-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-xl border border-violet-500/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-w-xs whitespace-normal pointer-events-none">
                          {item.puesto}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900"></div>
                        </div>
                      </div>

                      {item.url_organizacion ? (
                        <a
                          href={item.url_organizacion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 text-sm hover:text-green-400 transition-colors block"
                        >
                          {item.organizacion}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{item.organizacion}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm mt-3 pt-3 border-t border-gray-700">
                  <p className="text-cyan-400 font-mono text-xs">
                    {new Date(item.fecha_inicio).getFullYear()} - {item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : 'Actualidad'}
                  </p>
                  {item.horas && (
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded border border-green-500/30">
                      {item.horas}h
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
              {/* Botón Anterior */}
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-800/50 hover:bg-violet-600 text-white rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/50 border border-violet-500/20 hover:border-violet-500/50 text-sm font-medium"
              >
                ← Anterior
              </button>

              {/* Números de Página */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg transition-all duration-300 text-xs font-bold ${currentPage === page
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/50'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 border border-violet-500/20 hover:border-violet-500/50'
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Botón Siguiente */}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-800/50 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 text-sm font-medium"
              >
                Siguiente →
              </button>
            </div>
          )}

          {/* Mensaje cuando no hay resultados */}
          {filteredAndSortedItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No se encontraron formaciones en el rango de años seleccionado</p>
            </div>
          )}
        </>)}
      </div>

      {/* Estilos CSS para el tooltip y dual range slider */}
      <style>{`
        .tooltip-container:hover .tooltip {
          transform: translateY(-4px);
        }
        
        /* Dual Range Slider Styles */
        .range-slider-thumb {
          pointer-events: none;
        }
        
        .range-slider-thumb::-webkit-slider-thumb {
          pointer-events: all;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(139 92 246), rgb(6 182 212));
          cursor: pointer;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
          transition: all 0.2s;
          border: 2px solid white;
        }
        
        .range-slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        }
        
        .range-slider-thumb::-moz-range-thumb {
          pointer-events: all;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(139 92 246), rgb(6 182 212));
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
          transition: all 0.2s;
        }
        
        .range-slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        }

        .range-slider-thumb::-webkit-slider-runnable-track {
          background: transparent;
        }

        .range-slider-thumb::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}

export default ComplementaryTraining;