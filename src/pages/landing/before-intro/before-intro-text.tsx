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
      <div className="center">
        <h1 className="font-bold text-3xl md:text-8xl opacity-40">{number}</h1>
      </div>
      <div className="center">
        <p className="ml-5 mt-2 w-10/12 tracking-wider text-2xl md:text-5xl font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
}
