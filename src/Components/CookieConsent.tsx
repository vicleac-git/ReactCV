import React, { useEffect, useState } from 'react';
import { initializeGA } from '../utils/analytics';

export const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === null) {
            setShowBanner(true);
        } else if (consent === 'granted') {
            initializeGA();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'granted');
        initializeGA();
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'denied');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 shadow-lg z-50 border-t border-violet-500/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-300">
                    <p>
                        Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia de navegación.
                        Al hacer clic en "Aceptar", consientes el uso de estas cookies.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors border border-gray-600 rounded-lg hover:bg-gray-800"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 transition-colors rounded-lg shadow-lg shadow-violet-900/20"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};
