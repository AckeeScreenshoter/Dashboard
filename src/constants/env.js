export const isEnvDevelopment = process.env.NODE_ENV === 'development';
export const isEnvProduction = process.env.NODE_ENV === 'production';

export const isServerEnv = typeof window === 'undefined';

export const isCredentialManagementSupported = Boolean(navigator.credentials);

export const isMobileDevice = window.innerWidth < 1024;
