import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import type { Profile } from '../types';

interface MainLayoutProps {
    profile: Profile;
}

function MainLayout({ profile }: MainLayoutProps) {
    return (
        <div className="text-gray-200 antialiased bg-slate-900 selection:bg-violet-500 selection:text-white">
            <Navbar profile={profile} />
            <main className="pt-16 sm:pt-0">
                <Outlet />
            </main>
            <Footer profile={profile} />
        </div>
    );
}

export default MainLayout;
