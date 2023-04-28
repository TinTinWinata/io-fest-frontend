export interface IBeforeIntroTextProps {
  number: number;
  text: string;
}

export default function BeforeIntroText({
  number,
  text,
}: IBeforeIntroTextProps) {
  return (
    <div className="flex my-3">
      <h1 className="font-bold text-5xl">{number}</h1>
      <p className="ml-5 mt-3 tracking-wider text-xl font-semibold">{text}</p>
    </div>
  );
}
