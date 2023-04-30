import React, { useState } from 'react';
import FileImageViewer from '../modals/file-image-viewer';
import { IChildrenOnly } from '../types/children-only';
import { IFileViewerContext } from '../types/file-viewer';
import { IForumAttachment } from '../types/forum-attachment';
const fileViewerContext = React.createContext<IFileViewerContext>({
  setFile: () => {},
});

export function FileViewerProvider({ children }: IChildrenOnly) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [currFile, setCurrFile] = useState<IForumAttachment>();

  const setFile = (file: IForumAttachment) => {
    setOpen(true);
    setCurrFile(file);
  };

  return (
    <fileViewerContext.Provider value={{ setFile }}>
      {open && currFile && (
        <FileImageViewer handleOpen={setOpen} file={currFile} />
      )}
      <div className="">{children}</div>
    </fileViewerContext.Provider>
  );
}

export default function useFileViewer() {
  return React.useContext(fileViewerContext);
}
