import BeforeIntroText, { IBeforeIntroTextProps } from './before-intro-text';

const BEFORE_INTRO_TEXTS: IBeforeIntroTextProps[] = [
  { number: 1, text: 'Pola makan sehat' },
  { number: 2, text: 'Aktivitas fisik teratur' },
  { number: 3, text: 'Istirahat yang cukup' },
  { number: 4, text: 'Mengelola stress dengan baik' },
];

export default function BeforeIntro() {
  return (
    <div className="w-full h-[400px] bg-blue-100 dark:bg-orange-600">
      <div className="flex w-full h-full">
        <div className="h-full w-full center">
          <div className="w-1/2">
            <h1 className="font-serif mb-5 text-4xl font-semibold">
              Hanya perlu 4 langkah <br /> untuk sehat
            </h1>
            <button className="py-4 px-8  text-md bg-blue-600 hover:bg-blue-500 dark:bg-orange-500 dark:hover:bg-orange-400 text-white font-semibold my-3">
              Saya Mau Sehat
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-50 tracking-wide">
              Jaga Keseimbangan Hidupmu <br /> untuk Kesehatan Optimal
            </p>
          </div>
        </div>
        <div className="w-[0.5px] h-ful bg-blue-400 opacity-10 mr-6"></div>
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
