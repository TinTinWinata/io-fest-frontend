import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { RefObject, createRef, useEffect, useState } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import animationData from '../../../public/assets/food-2.json';
import animationText2Data from '../../../public/assets/food-text-2.json';
import { default as animationTextData } from '../../../public/assets/food-text.json';
import BeforeIntro from './before-intro/before-intro';
import Description from './description/description';
import LeftLanding from './first-left-landing';
import RightLanding from './first-right-landing';
import TopForum from './top-forum/top-forum';

export default function Landing() {
  const introRef = createRef<HTMLDivElement>();
  const firstRef = createRef<HTMLDivElement>();
  const lottieRef = createRef<LottieRefCurrentProps>();
  const lottieTextRef = createRef<LottieRefCurrentProps>();
  const [textClass, setTextClass] = useState<string>('');
  const lottieText2Ref = createRef<LottieRefCurrentProps>();
  const INTRO_DURATION = 3000;
  const WHITE_SCREEN_GAP = 1000;
  const TEXT_SHOW_IN_PROGRESS = 65;
  const [whiteIntro, setWhiteIntro] = useState<boolean>(true);

  const getWhiteScreenClass = () => (whiteIntro ? 'opacity-100' : 'opacity-0');

  const getTotalFrames = (animationData: any) => {
    return Math.floor(animationData.op);
  };

  const checkText = (percentage: number) => {
    // !Debugging Purpose
    // console.log('percentage : ', percentage);
    if (percentage > TEXT_SHOW_IN_PROGRESS) {
      setTextClass('opacity-100');
    } else {
      setTextClass('opacity-0');
    }
  };

  const handleFrameChange = (
    animationData: any,
    position: number,
    lottieRef: RefObject<LottieRefCurrentProps>,
    debug: boolean = false
  ) => {
    if (lottieRef.current) {
      lottieRef.current.stop();

      const percentage = Math.floor((position / INTRO_DURATION) * 100);

      // Checking Percentage Text
      checkText(percentage);

      const totalFrames = getTotalFrames(animationData);
      const frameNumber: number = Math.floor((percentage / 100) * totalFrames);
      // !Debugging Purpose
      if (debug)
        console.log(
          `percentage : ${percentage} | totalFrame : ${totalFrames} | frameNumber : ${frameNumber}`
        );

      frameNumber < totalFrames
        ? lottieRef.current.playSegments([frameNumber, animationData.op], true)
        : lottieRef.current.playSegments([totalFrames, animationData.op], true);

      lottieRef.current.stop();
    }
  };

  useEffect(() => {
    const controller: ScrollMagic.Controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      duration: INTRO_DURATION,
      triggerElement: introRef.current,
      triggerHook: 0,
    });

    const whiteScene = new ScrollMagic.Scene({
      triggerElement: introRef.current,
      duration: INTRO_DURATION,
      triggerHook: 0,
    });

    let accelAmount = 0.05;
    let scrollPos = 0;
    let delay = 0;

    if (introRef && introRef.current) {
      scene.addTo(controller).setPin(introRef.current);
      whiteScene.addTo(controller);
    }

    whiteScene.on('enter', () => {
      setWhiteIntro(false);
    });

    whiteScene.on('leave', () => {
      setWhiteIntro(true);
    });

    scene.on('update', (e: any) => {
      // !Debugging Purpose

      if (firstRef.current)
        scrollPos =
          e.scrollPos - firstRef.current.offsetHeight - WHITE_SCREEN_GAP;
      else scrollPos = e.scrollPos;
    });

    const intervalId = setInterval(() => {
      delay += (scrollPos - delay) * accelAmount;
      handleFrameChange(animationData, delay, lottieRef);
      handleFrameChange(animationTextData, delay, lottieTextRef);
      handleFrameChange(animationText2Data, delay, lottieText2Ref);
    }, 1);

    return () => {
      clearInterval(intervalId);
      controller.destroy(true);
    };
  }, []);

  return (
    <div className="bg-blue-50 dark:bg-gray-900">
      {/* <div className="bg-black absolute w-full h-full opacity-[60%]"></div> */}
      <div ref={firstRef} className="relative w-full h-screen center">
        <LeftLanding />
        <RightLanding />
        {/* Bird */}
        {/* <div className="absolute left-10 top-36">
          <Player autoplay loop className="w-52 h-52" src="/assets/bird.json" />
        </div> */}
      </div>

      <div
        ref={introRef}
        className="relative min-h-screen bg-blue-50 dark:bg-gray-900 min-w-screen center"
      >
        <div
          className={
            'transition-all bg-blue-50 dark:bg-gray-900 absolute w-full h-full z-50 ' +
            getWhiteScreenClass()
          }
        ></div>
        <div className=" center w-full h-full relative  ">
          <Lottie
            className="abs-center z-20 w-[600px]"
            autoplay={false}
            lottieRef={lottieRef}
            animationData={animationData}
          />
          <div
            hidden
            className="bg-blue-50 p-3 rounded overflow-hidden absolute z-10 right-10 top-10 w-[450px] h-[260px] "
          >
            <Lottie
              className="w-[500px] h-[300px] absolute bottom-[-20px] left-[30px]"
              autoplay={false}
              lottieRef={lottieTextRef}
              animationData={animationTextData}
            />
          </div>
          <div
            hidden
            className="bg-blue-50 p-3 rounded absolute z-10 bottom-10 left-14 w-[620px] h-[300px]"
          >
            <Lottie
              className="w-[700px] h-[300px] absolute left-[30px]"
              autoplay={false}
              lottieRef={lottieText2Ref}
              animationData={animationText2Data}
            />
          </div>
          <div className="relative w-screen h-screen ">
            <div
              className={
                'text-center font-serif text-8xl font-bold tracking-widest absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ' +
                textClass
              }
            >
              EAT HEALTHY!
            </div>
            <div
              className={
                'sm:text-xl md:text-xl lg:text-4xl text-center  font-thin  tracking-widest absolute sm:top-[35%] lg:top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ' +
                textClass
              }
            >
              "There Are Around 463 Million Adults Living With Diabetes in
              Worldwide."{' '}
              <span className="ml-3 font-serif text-blue-500  transition-all">
                {' '}
                - WHO (2019)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-100 dark:bg-gray-925 min-h-[1000px]  w-full center">
        <TopForum />
      </div>
      <div className="bg-light-blue dark:bg-gray-900 h-fit w-screen center">
        <Description />
      </div>
      <div className="w-full h-[400px] bg-dark-blue dark:bg-gray-950">
        <BeforeIntro />
      </div>
    </div>
  );
}
