import { Player } from '@lottiefiles/react-lottie-player';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import UseDiabetics from '../../hooks/use-diabetics';
import { IFormAnswer } from '../../types/form-answer';

interface IFormFinishProps {
  answers: IFormAnswer[];
}

export default function Finish({ answers }: IFormFinishProps) {
  const { data } = UseDiabetics(answers);
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  const getLottieAsset = (): string => {
    if (!data) {
      return '/assets/loading.json';
    } else if (data.result[0] == 0) {
      return '/assets/sickness.json';
    } else if (data.result[0] == 1) {
      return '/assets/strong.json';
    }
    return '/assets/loading.json';
  };
  const getLottieString = (): string => {
    if (!data) {
      return 'Please wait were checking all your answers!';
    } else if (data.result[0] == 0) {
      return 'Kamu harus senantiasa menjaga kesehatan dengan pola makan sehat, olahraga teratur, dan memantau kadar gula darah untuk mencegah terjadinya komplikasi yang bisa membahayakan kesehatan saya di masa depan.';
    } else if (data.result[0] == 1) {
      return 'Kamu harus tetap menjaga kesehatan dengan pola makan yang sehat dan aktif berolahraga agar terhindar dari risiko diabetes dan memiliki gaya hidup yang lebih sehat dan bugar.';
    }
    return '/assets/loading.json';
  };
  const getLottieTitle = (): string => {
    if (!data) {
      return '';
    } else if (data.result[0] == 0) {
      return 'Kamu tidak aman';
    } else if (data.result[0] == 1) {
      return 'Kamu aman';
    }
    return '/assets/loading.json';
  };

  return (
    <>
      <div onClick={handleBack} className="relative w-fit flex cursor-pointer">
        <div className="center">
          <FaArrowLeft className="w-3 h-3 text-gray-500" />
        </div>
        <div className="ml-2 mt-2 text-gray-500 mb-2 text-sm">Back</div>
      </div>
      <hr />
      <div className="text-center  flex flex-col center w-full h-full">
        <Player className="w-52 h-52" src={getLottieAsset()} autoplay loop />
        <h3 className="font-semibold text-2xl ">{getLottieTitle()}</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-200">
          {getLottieString()}
        </p>

        {/* Invicible Button */}
        <div className="h-16"></div>

        {/* Real Button */}
        <Link
          to="/home"
          className="absolute px-2 py-3 rounded-b-lg bottom-0 font-semibold bg-blue-600 hover:bg-blue-700 text-gray-50  dark:hover:bg-orange-700 transition-all w-full dark:bg-orange-600"
        >
          Home
        </Link>
      </div>
    </>
  );
}
