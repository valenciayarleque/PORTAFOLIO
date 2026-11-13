/** Resuelve archivos de /public respetando la base de Vite. */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
