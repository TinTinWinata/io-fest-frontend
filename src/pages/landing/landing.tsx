import { createRef, useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import LeftLanding from './first-left-landing';
import RightLanding from './first-right-landing';

export default function Landing() {
  const introRef = createRef<HTMLDivElement>();
  const videoRef = createRef<HTMLVideoElement>();
  useEffect(() => {
    console.log('terpanggil');
    const controller: ScrollMagic.Controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      duration: 8000,
      triggerElement: introRef.current,
      triggerHook: 0,
    });
    if (introRef && introRef.current)
      scene.addTo(controller).addIndicators().setPin(introRef.current);
    let accelAmount = 0.1;
    let scrollPos = 0;
    let delay = 0;

    scene.on('update', (e: any) => {
      scrollPos = e.scrollPos / 1000;
    });

    setInterval(() => {
      delay += (scrollPos - delay) * accelAmount;
      if (videoRef.current) {
        console.log('scrollPos : ', scrollPos);
        videoRef.current.play();
        videoRef.current.currentTime = scrollPos;
      }
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
      <div ref={introRef} className="min-h-screen  w-screen">
        <video
          ref={videoRef}
          className="bg-red-300 w-full h-full  object-cover"
          src="/assets/landing-video.mp4"
        ></video>
        {/* <h1>Cari Tahu</h1> */}
      </div>
      <div className="min-h-screen  w-screen">{/* <h1>Cari Tahu</h1> */}</div>
    </div>
  );
}
