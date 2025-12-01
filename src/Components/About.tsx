import React from 'react';

interface AboutProps {
    summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
    return (
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
            <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm py-4 mb-8">
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                    Sobre mí
                </h2>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-violet-500/20 shadow-xl backdrop-blur-sm hover:border-violet-500/40 transition-colors">
                <p className="text-lg text-white text-justify leading-relaxed whitespace-pre-line">
                    {summary}
                </p>
            </div>
        </section>
    );
};

export default About;
