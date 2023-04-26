export default function Emoji({ emoji }: { emoji: string }) {
  return (
    <div className="rounded-xl cursor-pointer p-1 hover:bg-gray-50 transition-all">
      {emoji}
    </div>
  );
}
