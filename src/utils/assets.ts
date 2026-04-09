/**
 * Resolves the correct path for an asset, handling the base URL for production.
 * @param path The relative path to the asset (e.g., "/image.jpg")
 * @returns The full path including the base URL if applicable
 */
export const getAssetPath = (path: string): string => {
    // If it's a full URL, return as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // Get base URL from Vite env
    const baseUrl = import.meta.env.BASE_URL;

    // Remove leading slash from path if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // If base URL is just '/', return the path with a leading slash
    if (baseUrl === '/') {
        return `/${cleanPath}`;
    }

    // Ensure baseUrl ends with slash
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

    return `${cleanBaseUrl}${cleanPath}`;
};
