import type { Profile } from '../types';

interface HeroProps {
    profile: Profile;
}

function Hero({ profile }: HeroProps) {
    return (
        <section id="hero" className="bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                {/* Imagen de Perfil */}
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] neon-box transition-all duration-300">
                    <img src={profile.foto} alt={profile.nombre} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/1e293b/ffffff?text=Foto'; }} />
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                    Hola, soy
                    <br />
                    <button type="button" className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 block mt-2 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.9)] hover:scale-105 cursor-pointer text-4xl sm:text-6xl lg:text-7xl font-extrabold border-none bg-transparent p-0 mx-auto">{profile.nombre}</button>
                </h1>
                <p className="text-xl sm:text-2xl font-light mb-10 text-gray-300">
                    {profile.titulo}
                </p>

                {/* Sobre mí */}
                <div className="max-w-3xl mx-auto mb-10">
                    <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                        Sobre mí
                    </h2>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-violet-500/20 shadow-xl backdrop-blur-sm hover:border-violet-500/40 transition-colors">
                        <p className="text-base text-white text-justify leading-relaxed whitespace-pre-line">
                            {profile.resumen}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
