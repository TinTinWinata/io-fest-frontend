import { Player } from "@lottiefiles/react-lottie-player";

export default function TopForumCloud() {
  return (
    <>
      <div className="absolute right-[-150px] z-50 top-[-30px]">
        <Player autoplay loop className="w-52 h-52" src="/assets/cloud.json" />
      </div>
      <div className="transform scale-x-[-1] absolute left-[-150px] z-50 top-[-30px]">
        <Player autoplay loop className="w-52 h-52" src="/assets/cloud.json" />
      </div>
    </>
  );
}
