import useFileViewer from '../../hooks/file-viewer-context';
import {
  FORUM_ATTACHMENT_TYPE,
  IForumAttachment,
} from '../../types/forum-attachment';
import { getForumImage } from '../../utils/helper';

interface IPreviewAttachmentProps {
  attachment: IForumAttachment;
}

export default function PreviewAttachment({
  attachment,
}: IPreviewAttachmentProps) {
  const { setFile } = useFileViewer();

  const handleClick = () => {
    setFile(attachment);
  };
  const getClass = () => 'w-16 h-16 object-cover';

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden w-16 h-16 cursor-pointer rounded-md"
    >
      <div className="absolute w-full h-full bg-black bg-opacity-10"></div>
      {attachment.type === FORUM_ATTACHMENT_TYPE.image && (
        <img className={getClass()} src={getForumImage(attachment)} />
      )}
      {attachment.type === FORUM_ATTACHMENT_TYPE.video && (
        <video className={getClass()} src={getForumImage(attachment)} />
      )}
    </div>
  );
}
