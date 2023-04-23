import { toastError } from "./toast";

export const displayError = (errors : string[]) => errors.forEach((error)=> toastError(error))