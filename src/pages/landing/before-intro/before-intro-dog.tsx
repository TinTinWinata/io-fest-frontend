import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

export default function BeforeIntroDog() {
  const [hover, setHover] = useState<boolean>(false);
  const getDogClass = () => (hover ? 'bottom-[-150px]' : 'bottom-[-40px]');
  return (
    <>
      {/* Trigger Div */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`absolute z-50 w-20 h-20 right-[90px] bottom-[0px]`}
      ></div>

      {/* Dog */}
      <div className={`absolute right-16 transition-all ` + getDogClass()}>
        <Player className="w-32 h-32" autoplay loop src="/assets/dog.json" />
      </div>
    </>
  );
}
