import useFileViewer from '../../hooks/file-viewer-context';
import { IForumAttachment } from '../../types/forum-attachment';
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
  return (
    <div onClick={handleClick} className="w-fit cursor-pointer">
      <img className="w-10 h-10" src={getForumImage(attachment)} />
    </div>
  );
}
