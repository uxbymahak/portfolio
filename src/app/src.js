export const loadScripts = async () => {
    try {
        await Promise.all([
            import('@/public/assets/js/matter.min.js'),
            import('@/public/assets/js/matter-custom.js'),
            import('@/public/assets/js/index.js')
        ]);

        // Optional delay if needed
        await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
        console.error('Error loading scripts:', error);
    }
};