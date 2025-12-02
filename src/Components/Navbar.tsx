import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { Profile } from '../types';

interface NavbarProps {
    profile: Profile;
}

function Navbar({ profile }: NavbarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
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
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu on click

        // If we're not on the home page, navigate to home first
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            // We're on home, just scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Update hash without triggering navigation
                window.history.replaceState(null, '', `#${id}`);
            }
        }
    };

    return (
        <nav id="navbar" className={`fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg z-50 border-b border-violet-500/20 transition-all duration-300 ${isVisible ? 'py-2' : 'py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Nombre */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, 'hero')}
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.9)] hover:scale-105"
                    >
                        Víctor Leal Acosta
                    </a>
                    {/* Enlaces de Navegación */}
                    <div className="hidden sm:flex items-center space-x-8">
                        {['Sobre mí', 'Experiencia', 'Habilidades', 'Portafolio'].map((item) => {
                            const id = item === 'Sobre mí' ? 'hero' : item === 'Experiencia' ? 'experience' : item === 'Habilidades' ? 'skills' : 'portfolio';
                            return (
                                <a
                                    key={item}
                                    href={`#${id}`}
                                    onClick={(e) => handleNavClick(e, id)}
                                    className="text-gray-300 hover:text-cyan-400 font-medium transition duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#22d3ee]"></span>
                                </a>
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

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-slate-900/95 backdrop-blur-md border-b border-violet-500/20">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {['Sobre mí', 'Experiencia', 'Habilidades', 'Portafolio'].map((item) => {
                            const id = item === 'Sobre mí' ? 'hero' : item === 'Experiencia' ? 'experience' : item === 'Habilidades' ? 'skills' : 'portfolio';
                            return (
                                <a
                                    key={item}
                                    href={`#${id}`}
                                    onClick={(e) => handleNavClick(e, id)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-violet-600/20 transition duration-300"
                                >
                                    {item}
                                </a>
                            );
                        })}
                        <a
                            href={`mailto:${profile.email}`}
                            className="block w-full text-center mt-4 bg-violet-600 text-white font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:bg-violet-500 transition duration-300"
                        >
                            Contáctame Ahora
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

