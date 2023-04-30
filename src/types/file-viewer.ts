import { IForumAttachment } from './forum-attachment';

export type IFileViewerContext = {
  setFile: (file: IForumAttachment) => any;
};
