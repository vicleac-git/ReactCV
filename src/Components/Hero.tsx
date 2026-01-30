import type { Profile } from '../types';

interface HeroProps {
    profile: Profile;
}

function Hero({ profile }: HeroProps) {
    return (
        <section id="hero" className="bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Columna Izquierda: Imagen y Datos */}
                    <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="w-48 h-48 lg:w-64 lg:h-64 mb-8 rounded-full overflow-hidden border-4 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_#06b6d4,0_0_30px_#06b6d4] hover:border-cyan-500 transition-all duration-300">
                            <img src={profile.foto} alt={profile.nombre} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/1e293b/ffffff?text=Foto'; }} />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                            Hola, soy
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 block mt-2 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.9)] hover:scale-105 cursor-default">
                                {profile.nombre}
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl font-light text-gray-300 mb-8 lg:mb-0">
                            {profile.titulo}
                        </p>
                    </div>

                    {/* Columna Derecha: Texto Sobre mí */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-violet-500/20 shadow-xl backdrop-blur-sm hover:border-violet-500/40 transition-colors relative">
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg opacity-70"></div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-violet-500 rounded-br-lg opacity-70"></div>
                            
                            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 inline-block border-b border-violet-500/30 pb-2">
                                Sobre mí
                            </h2>
                            <p className="text-lg text-gray-300 text-justify leading-relaxed whitespace-pre-line">
                                {profile.resumen}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
