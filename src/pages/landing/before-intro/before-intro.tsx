import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BeforeIntroDog from './before-intro-dog';
import BeforeIntroText, { IBeforeIntroTextProps } from './before-intro-text';

const BEFORE_INTRO_TEXTS: IBeforeIntroTextProps[] = [
  { number: 1, text: 'Pola makan sehat' },
  { number: 2, text: 'Aktivitas fisik teratur' },
  { number: 3, text: 'Istirahat yang cukup' },
  { number: 4, text: 'Mengelola stress dengan baik' },
];

export default function BeforeIntro() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextIndex = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= BEFORE_INTRO_TEXTS.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextIndex(), 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClickButton = () => navigate('/home');

  return (
    <>
      <div className="overflow-hidden relative flex w-full h-full text-gray-50">
        <div className="h-full w-full center">
          <div className="w-1/2">
            <h1 className="font-serif mb-5 text-4xl font-semibold">
              Hanya perlu 4 langkah <br /> untuk sehat
            </h1>
            <button
              onClick={handleClickButton}
              className="py-4 px-8  text-md bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold my-3"
            >
              Saya Mau Sehat
            </button>
            <p className="text-sm text-gray-300 dark:text-gray-50 tracking-wide">
              Jaga Keseimbangan Hidupmu <br /> untuk Kesehatan Optimal
            </p>
          </div>
        </div>
        <div className="w-[0.5px] h-ful bg-blue-400 opacity-10 mr-6"></div>
        <div className="h-full w-full  flex justify-center items-left flex-col">
          <BeforeIntroText
            number={BEFORE_INTRO_TEXTS[activeIndex].number}
            text={BEFORE_INTRO_TEXTS[activeIndex].text}
          />
          <div className="flex mt-10 w-full">
            {BEFORE_INTRO_TEXTS.map((intro, index) => {
              const getColorClass = () =>
                index === activeIndex
                  ? 'bg-blue-500'
                  : 'bg-blue-400 opacity-50';
              const handleOnClick = () => setActiveIndex(index);
              return (
                <div
                  key={index}
                  onClick={handleOnClick}
                  className={
                    'cursor-pointer mx-2 rounded-full w-3 h-3 ' +
                    getColorClass()
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <BeforeIntroDog />
    </>
  );
}
