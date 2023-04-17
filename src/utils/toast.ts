import { Id, toast } from "react-toastify";

export function toastSuccess(str: String) {
  toast.success(str, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export function toastError(str: String) {
  toast.error(str, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export function toastLoading(str: string) {
  return toast.loading(str, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}


export function toastUpdateSuccess(id: Id, text: string = 'Success') {
  toast.update(id, {
    render: text,
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
export function toastUpdateFailed(id: Id, text: string = 'Failed!') {
  toast.update(id, {
    render: text,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}