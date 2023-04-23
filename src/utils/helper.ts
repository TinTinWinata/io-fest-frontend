import { toastError } from "./toast";

export const displayError = (errors : string[]) => errors.forEach((error)=> toastError(error))
export const getBackendUrl = (): string => import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : "http://localhost:3000/"
export const getImageUrl = (url?: string): string => {
  if(!url)
    return '/assets/default_profile_picture.webp' 
  else
    return url.startsWith('/') ? getBackendUrl() + url : url
  
}