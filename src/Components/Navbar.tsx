import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Profile } from '../types';

interface NavbarProps {
    profile: Profile;
}

function Navbar({ profile }: NavbarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        // If we are already on the home page, prevent default navigation and scroll smoothly
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Optionally update URL hash without scrolling (since we did it manually)
                window.history.pushState(null, '', `/#${id}`);
            }
        }
    };

    return (
        <nav id="navbar" className={`fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg z-50 border-b border-violet-500/20 transition-all duration-300 ${isVisible ? 'py-2' : 'py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Nombre */}
                    <Link
                        to="/#hero"
                        onClick={(e) => handleNavClick(e, 'hero')}
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.9)] hover:scale-105"
                    >
                        Víctor Leal Acosta
                    </Link>
                    {/* Enlaces de Navegación */}
                    <div className="hidden sm:flex items-center space-x-8">
                        {['Sobre mí', 'Experiencia', 'Habilidades', 'Portafolio'].map((item) => {
                            const id = item === 'Sobre mí' ? 'hero' : item === 'Experiencia' ? 'experience' : item === 'Habilidades' ? 'skills' : 'portfolio';
                            return (
                                <Link
                                    key={item}
                                    to={`/#${id}`}
                                    onClick={(e) => handleNavClick(e, id)}
                                    className="text-gray-300 hover:text-cyan-400 font-medium transition duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#22d3ee]"></span>
                                </Link>
                            );
                        })}
                        {/* Botón Contáctame */}
                        <a
                            href={`mailto:${profile.email}`}
                            className="bg-violet-600 text-white font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition duration-300 transform hover:scale-105 border border-violet-400/50"
                        >
                            Contáctame Ahora
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

