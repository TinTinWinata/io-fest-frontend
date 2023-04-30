import { Dispatch, SetStateAction } from 'react';
import { SlClose } from 'react-icons/sl';
import {
  FORUM_ATTACHMENT_TYPE,
  IForumAttachment,
} from '../types/forum-attachment';
import { getForumImage } from '../utils/helper';

interface IFileImageViewer {
  file: IForumAttachment;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FileImageViewer({
  file,
  handleOpen,
}: IFileImageViewer) {
  const handleOnClick = () => handleOpen(false);

  return (
    <div className="z-[550] top-0 left-0 bg-opacity-80 bg-black fixed w-screen h-screen">
      <div className="abs-center w-fit">
        <div
          onClick={handleOnClick}
          className="z-[550]  absolute right-[-50px] top-[-50px] cursor-pointer w-fit center p-3"
        >
          <SlClose className="w-8 h-8 text-white " />
        </div>
        {file.type === FORUM_ATTACHMENT_TYPE.image && (
          <img src={getForumImage(file)} alt={file.forumId} />
        )}
        {file.type === FORUM_ATTACHMENT_TYPE.video && (
          <video src={getForumImage(file)} controls />
        )}
      </div>
    </div>
  );
}
