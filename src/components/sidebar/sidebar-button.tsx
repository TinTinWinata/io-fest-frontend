import { GiAbstract014, GiCharm } from 'react-icons/gi';

export default function SidebarButton({
  handler,
  close,
}: {
  handler: () => void;
  close: boolean;
}) {
  return (
    <div className="absolute right-0 top-[50%] translate-y-[-50%] translate-x-[25%]">
      <div
        onClick={handler}
        className="cursor-pointer relative rounded-full bg-blue-500 dark:bg-blue-500 w-20 h-20"
      >
        {close ? (
          <GiAbstract014 className="absolute translate-x-[-50%] translate-y-[-50%] left-[65%] top-[50%] text-blue-50 w-8 h-8" />
        ) : (
          <GiCharm className="absolute translate-x-[-50%] translate-y-[-50%] left-[65%] top-[50%] text-blue-50 w-8 h-8" />
        )}
      </div>
    </div>
  );
}
