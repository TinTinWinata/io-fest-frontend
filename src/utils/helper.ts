import { toastError } from './toast';

export const displayError = (errors: string[]) =>
  errors.forEach((error) => toastError(error));
export const getBackendUrl = (): string =>
  import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : 'http://localhost:3000/';
export const getBackendImageUrl = (): string =>
  getBackendUrl() + 'public/profile-picture/';

export const removeSliceInfront = (url: string): string =>
  url.startsWith('/') ? url.substring(1) : url;

export const getImageUrl = (url?: string): string => {
  if (!url) return '/assets/default_profile_picture.webp';
  else
    return !url.startsWith('http')
      ? getBackendImageUrl() + removeSliceInfront(url)
      : url;
};
