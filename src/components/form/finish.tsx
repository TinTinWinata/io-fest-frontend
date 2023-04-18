import { Player } from '@lottiefiles/react-lottie-player';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Finish() {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  return (
    <>
      <div onClick={handleBack} className="w-fit flex cursor-pointer">
        <div className="center">
          <FaArrowLeft className="w-3 h-3 text-gray-500" />
        </div>
        <div className="ml-2 mt-2 text-gray-500 mb-2 text-sm">Back</div>
      </div>
      <hr />
      <div className="text-center  flex flex-col center w-full h-full">
        <Player
          className="w-52 h-52"
          src={'/assets/strong.json'}
          autoplay
          loop
        />
        <h3 className="font-semibold text-2xl ">You're Safe!</h3>
        <p className="mt-2 text-gray-500">
          Congratulation! You're 15% person who's didn't have diabetic!
        </p>
      </div>
    </>
  );
}
