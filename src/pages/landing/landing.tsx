import { Player } from '@lottiefiles/react-lottie-player';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { RefObject, createRef, useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import animationData from '../../../public/assets/food-2.json';
import animationText2Data from '../../../public/assets/food-text-2.json';
import { default as animationTextData } from '../../../public/assets/food-text.json';
import BeforeIntro from './before-intro/before-intro';
import LeftLanding from './first-left-landing';
import RightLanding from './first-right-landing';
import TopForum from './top-forum/top-forum';

export default function Landing() {
  const introRef = createRef<HTMLDivElement>();
  const firstRef = createRef<HTMLDivElement>();
  const lottieRef = createRef<LottieRefCurrentProps>();
  const lottieTextRef = createRef<LottieRefCurrentProps>();
  const lottieText2Ref = createRef<LottieRefCurrentProps>();
  const INTRO_DURATION = 2000;

  const getTotalFrames = (animationData: any) => {
    return Math.floor(animationData.op);
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
    if (introRef && introRef.current)
      scene.addTo(controller).setPin(introRef.current);
    let accelAmount = 0.05;
    let scrollPos = 0;
    let delay = 0;

    scene.on('update', (e: any) => {
      // !Debugging Purpose
      // console.log('scrollpos : ', scrollPos);

      if (firstRef.current)
        scrollPos = e.scrollPos - firstRef.current.offsetHeight;
      else scrollPos = e.scrollPos;
    });

    setInterval(() => {
      delay += (scrollPos - delay) * accelAmount;
      handleFrameChange(animationData, delay, lottieRef);
      handleFrameChange(animationTextData, delay, lottieTextRef);
      handleFrameChange(animationText2Data, delay, lottieText2Ref);
    }, 1);
  }, []);

  return (
    <div className="">
      {/* <div className="bg-black absolute w-full h-full opacity-[60%]"></div> */}
      <div ref={firstRef} className="w-full h-screen center">
        <LeftLanding />
        <RightLanding />
      </div>
      <BeforeIntro />
      <div
        data-aos="fade-up"
        ref={introRef}
        className=" min-h-screen  min-w-screen center"
      >
        {/* <Player autoplay keepLastFrame src={'/assets/food.json'}>
          <Controls></Controls>
        </Player> */}
        <div className="center w-full h-full relative bg-red-300 ">
          {/* <div className="w-full center">test</div> */}
          <Lottie
            className="abs-center z-20 w-[600px]"
            speed={0}
            autoplay={false}
            direction={1}
            lottieRef={lottieRef}
            animationData={animationData}
          />
          <Lottie
            className="absolute z-10 right-10 top-10 w-[500px] h-[300px] "
            speed={0}
            autoplay={false}
            direction={1}
            lottieRef={lottieTextRef}
            animationData={animationTextData}
          />
          <Lottie
            className="absolute z-10 bottom-10 left-14 w-[700px] h-[300px] "
            speed={0}
            autoplay={false}
            direction={1}
            lottieRef={lottieText2Ref}
            animationData={animationText2Data}
          />
          {/* <div className="w-full center">test</div> */}
        </div>
        {/* <input type="number" value={startFrame} onChange={handleFrameChange} /> */}
        {/* <video
          ref={videoRef}
          className="w-200 h-200"
          src="/assets/food.mp4"
        ></video> */}
        {/* <h1>Cari Tahu</h1> */}
      </div>
      <div
        data-aos="fade-up"
        className="bg-blue-100 dark:bg-orange-600 min-h-[1000px]  w-full center"
      >
        <TopForum />
      </div>
      <div data-aos="fade-up" className="min-h-screen  w-screen center">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl font-serif">
            Cara Mengurangi Stres dengan Mudah
          </h1>
          <p className="font-semibold mt-6 leading-6 tracking-widest text-lg -center max-w-[650px]">
            Stres dapat mempengaruhi kesehatan mental dan fisik seseorang. Ada
            beberapa cara mudah untuk mengurangi stres, seperti berolahraga,
            melakukan meditasi atau yoga, atau menghabiskan waktu dengan
            melakukan kegiatan yang disukai. Cobalah cari kegiatan yang dapat
            membantu meredakan stresmu agar tubuh dan pikiranmu tetap sehat.
          </p>
          <Player
            className="mt-5 w-96 h-96"
            autoplay
            loop
            src={'/assets/health.json'}
          />
        </div>
        {/* <TopForum /> */}
      </div>
    </div>
  );
}
