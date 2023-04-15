import LeftLanding from './left-landing';
import RightLanding from './right-landing';

export default function Landing() {
  return (
    <div className="overflow-hidden">
      {/* <div className="bg-black absolute w-full h-full opacity-[60%]"></div> */}
      <div className="w-full h-screen center">
        <LeftLanding />
        <RightLanding />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
