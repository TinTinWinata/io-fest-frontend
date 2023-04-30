import { CgClose } from 'react-icons/cg';

interface IFileViewerProps {
  file: File;
  index?: number;
  handleRemove: (index: number) => any;
}

export default function FileViewer({
  handleRemove,
  file,
  index,
}: IFileViewerProps) {
  const handleOnClick = () => {
    index !== undefined && handleRemove(index);
  };
  return (
    <>
      <div className="relative">
        <div
          onClick={handleOnClick}
          className="cursor-pointer w-fit absolute right-[-5px] top-[-5px]"
        >
          {index !== null && <CgClose className="text-gray-500" />}
        </div>
        <div className="cursor-pointer px-4 py-2 w-fit rounded-lg bg-blue-50 text-sm font-semibold text-gray-500">
          {file.name}
        </div>
      </div>
    </>
  );
}
