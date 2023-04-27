import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { createRef, useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import animationData from '../../../public/assets/food.json';
import LeftLanding from './first-left-landing';
import RightLanding from './first-right-landing';

export default function Landing() {
  const introRef = createRef<HTMLDivElement>();
  const videoRef = createRef<HTMLVideoElement>();
  const lottieRef = createRef<LottieRefCurrentProps>();
  const INTRO_DURATION = 9000;

  const getTotalFrames = () => {
    // if (lottieRef.current) {
    //   const durationInSeconds = lottieRef.current.getDuration(false);

    //   const frameRate = animationData.fr;
    //   console.log(
    //     `duration in second : ${durationInSeconds} | frameRate : ${frameRate}`
    //   );
    //   const totalFrames = durationInSeconds
    //     ? Math.floor(durationInSeconds) * frameRate
    //     : 0;
    //   return totalFrames;
    // }
    // return 0;

    return Math.floor(animationData.op);
  };

  const handleFrameChange = (position: number) => {
    if (lottieRef.current) {
      const percentage = Math.floor((position / INTRO_DURATION) * 100);
      const totalFrames = getTotalFrames();
      const frameNumber: number = Math.floor((percentage / 100) * totalFrames);
      // !Debugging Purpose
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
      scene.addTo(controller).addIndicators().setPin(introRef.current);
    let accelAmount = 0.1;
    let scrollPos = 0;
    let delay = 0;

    scene.on('update', (e: any) => {
      scrollPos = e.scrollPos;
    });

    setInterval(() => {
      delay += (scrollPos - delay) * accelAmount;
      handleFrameChange(delay);
    }, 33.33);
  }, []);

  return (
    <div className="">
      {/* <div className="bg-black absolute w-full h-full opacity-[60%]"></div> */}
      <div className="w-full h-screen center">
        <LeftLanding />
        <RightLanding />
      </div>
      1
      <div
        ref={introRef}
        className="bg-white min-h-screen  min-w-screen center"
      >
        {/* <Player autoplay keepLastFrame src={'/assets/food.json'}>
          <Controls></Controls>
        </Player> */}
        <Lottie
          className="w-1/2 h-1/2"
          speed={0}
          autoplay={false}
          direction={1}
          lottieRef={lottieRef}
          animationData={animationData}
        />
        {/* <input type="number" value={startFrame} onChange={handleFrameChange} /> */}
        {/* <video
          ref={videoRef}
          className="w-200 h-200"
          src="/assets/food.mp4"
        ></video> */}
        {/* <h1>Cari Tahu</h1> */}
      </div>
      <div className="min-h-screen  w-screen">{/* <h1>Cari Tahu</h1> */}</div>
    </div>
  );
}
