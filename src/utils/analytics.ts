declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
    }
}

export const GA_MEASUREMENT_ID = 'G-73QVVRGEEY';

export const grantConsent = () => {
    if (window.gtag) {
        window.gtag('consent', 'update', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted'
        });
    }
};
