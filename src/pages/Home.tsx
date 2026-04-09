import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import Experience from '../Components/Experience';
import ComplementaryTraining from '../Components/ComplementaryTraining';
import OtherExperience from '../Components/OtherExperience';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';
import type { ResumeData } from '../types';

interface HomeProps {
    data: ResumeData;
}

function Home({ data }: HomeProps) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero profile={data.perfil} />
            <Experience experience={data.experiencia} education={data.formacion} />
            <ComplementaryTraining items={data.formacionComplementaria} />
            <OtherExperience items={data.otraExperiencia} />
            <Skills skills={data.habilidades} />
            <Portfolio projects={data.proyectos} />
        </>
    );
}

export default Home;
