import { Dispatch, SetStateAction, createRef, useEffect } from 'react';
import Emoji from './emoji';

interface IEmojiContainerProps {
  emojis: string[];
  handler: (e: any) => any;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EmojiContainer({
  emojis,
  handler,
  setOpen,
}: IEmojiContainerProps) {
  const divRef = createRef<HTMLDivElement>();

  useEffect(() => {
    console.log('set handler!');
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  return (
    <div
      ref={divRef}
      className="bg-white border border-gray-500 flex border-opacity-50 w-fit h-fit rounded-md absolute top-0 translate-y-[-100%] translate-x-[100%] right-[0px]"
    >
      {emojis.map((emoji, index) => (
        <Emoji handler={handler} key={index} emoji={emoji} />
      ))}
    </div>
  );
}
