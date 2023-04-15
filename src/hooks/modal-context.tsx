import React from 'react';
import { IChildrenOnly } from '../types/children-only';
import { IModal } from '../types/modal';

const modalContext = React.createContext<IModal>({
  // Default value context
  setOpen: () => {},
});

export function ModalProvider({ children }: IChildrenOnly) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <modalContext.Provider value={{ setOpen }}>
      <div className="">{children}</div>
    </modalContext.Provider>
  );
}

export default function useModal() {
  return React.useContext(modalContext);
}
