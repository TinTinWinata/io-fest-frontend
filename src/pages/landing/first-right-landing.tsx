import { Player } from '@lottiefiles/react-lottie-player';

export default function RightLanding() {
  return (
    <div className="relative w-[400px] h-[300px]  ">
      <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
        <Player
          autoplay
          loop
          className="w-[450px] h-[300px] md:w-[1000px] md:h-[800px]"
          src="/assets/cari-tahu.json"
        ></Player>
      </div>
    </div>
  );
}
