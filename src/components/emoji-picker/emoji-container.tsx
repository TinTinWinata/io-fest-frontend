import Emoji from './emoji';

export default function EmojiContainer({ emojis }: { emojis: string[] }) {
  return (
    <div className="bg-white border border-gray-500 flex border-opacity-50 w-fit h-fit rounded-md absolute top-0 translate-y-[-100%] translate-x-[100%] right-[0px]">
      {emojis.map((emoji, index) => (
        <Emoji key={index} emoji={emoji} />
      ))}
    </div>
  );
}
