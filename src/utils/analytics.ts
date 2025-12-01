declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
    }
}

export const GA_MEASUREMENT_ID = 'G-73QVVRGEEY';

export const initializeGA = () => {
    // Prevent double initialization
    if (window.gtag) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
        window.dataLayer.push(args);
    }
    gtag('js', new Date());

    gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
    });

    window.gtag = gtag;
};
