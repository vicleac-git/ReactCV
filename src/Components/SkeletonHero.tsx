import React from 'react';

const SkeletonHero: React.FC = () => {
    return (
        <section className="bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Elements (Mismos que Hero para consistencia) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full animate-pulse">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Columna Izquierda: Imagen y Datos */}
                    <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Foto Skeleton */}
                        <div className="w-48 h-48 lg:w-64 lg:h-64 mb-8 rounded-full bg-slate-800 border-4 border-slate-700/50"></div>

                        {/* Título (Hola, soy...) Skeleton */}
                        <div className="h-10 w-48 bg-slate-800 rounded-lg mb-4"></div>
                        
                        {/* Nombre Skeleton */}
                        <div className="h-14 w-3/4 bg-slate-800 rounded-lg mb-6"></div>

                        {/* Subtítulo Skeleton */}
                        <div className="h-8 w-2/3 bg-slate-800 rounded-lg"></div>
                    </div>

                    {/* Columna Derecha: Texto Sobre mí */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 h-full min-h-[300px]">
                            {/* Título Sección Skeleton */}
                            <div className="h-8 w-32 bg-slate-800 rounded mb-8"></div>
                            
                            {/* Párrafos de texto Skeleton */}
                            <div className="space-y-4">
                                <div className="h-4 w-full bg-slate-800 rounded"></div>
                                <div className="h-4 w-full bg-slate-800 rounded"></div>
                                <div className="h-4 w-11/12 bg-slate-800 rounded"></div>
                                <div className="h-4 w-full bg-slate-800 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-800 rounded"></div>
                                <div className="h-4 w-full bg-slate-800 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkeletonHero;