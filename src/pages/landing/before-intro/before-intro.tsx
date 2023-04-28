import BeforeIntroText, { IBeforeIntroTextProps } from './before-intro-text';

const BEFORE_INTRO_TEXTS: IBeforeIntroTextProps[] = [
  { number: 1, text: 'Create a personalized plan' },
  { number: 2, text: 'Get your estimate in just a few clicks' },
  { number: 3, text: 'Answer some background questions' },
  { number: 4, text: 'Get coverage in less than 10 mins' },
];

export default function BeforeIntro() {
  return (
    <div className="w-full h-[400px] bg-gray-200">
      <div className="flex w-full h-full">
        <div className="h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold">Sign in 4 simple steps</h1>
          <p className="text-xs text-gray-500">Plans start at $9 / mo.</p>
        </div>
        <div className="h-full w-full flex justify-center items-left flex-col">
          {BEFORE_INTRO_TEXTS.map((text, index) => (
            <BeforeIntroText
              number={text.number}
              text={text.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
