interface IEmojiProps {
  emoji: string;
  handler: (e: any) => void;
}

export default function Emoji({ emoji, handler }: IEmojiProps) {
  return (
    <div
      onClick={() => {
        handler(emoji);
      }}
      className="cursor-pointer p-1  transition-all"
    >
      <div className="rounded-full  transition-all hover:bg-blue-100 p-1">
        {emoji}
        
      </div>
    </div>
  );
}
