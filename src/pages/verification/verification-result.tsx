import { Player } from '@lottiefiles/react-lottie-player';

export default function VerificationResult({
  jsonUrl,
  text,
}: {
  jsonUrl: string;
  text: string;
}) {
  return (
    <div className="">
      <div className="absolute translate-x-[-50%] top-[-75px] left-[50%]">
        <Player src={jsonUrl} autoplay loop className="w-[320px]" />
      </div>
      <div className="h-56"></div>
      <div className="center">
        <p className="text-xl text-center font-semibold w-3/4">{text}</p>
      </div>
    </div>
  );
}
