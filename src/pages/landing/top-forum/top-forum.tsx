import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import LandingForum from '../../../components/landing-forum';
import useForum from '../../../hooks/use-forum';

export default function TopForum() {
  const { data } = useForum();
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/register');
  return (
    <>
      <div
        data-aos="fade-up"
        className="relative flex justify-center text-center items-center flex-col"
      >
        <div className="absolute right-[-150px] z-50 top-[-30px]">
          <Player
            autoplay
            loop
            className="w-52 h-52"
            src="/assets/cloud.json"
          />
        </div>
        <div className="transform scale-x-[-1] absolute left-[-150px] z-50 top-[-30px]">
          <Player
            autoplay
            loop
            className="w-52 h-52"
            src="/assets/cloud.json"
          />
        </div>
        <h1 className="text-4xl font-serif font-bold" data-aos="fade-up">
          Forum teratas di CariTahu.id
        </h1>
        <p className="opacity-90 text-lg font-semibold p-5" data-aos="fade-up">
          Bertanya Tak Merugikan Cegah Penyakit Sebelum Terlambat, Yuk Cari
          Tahu!
        </p>
        <div className="grid-cols-2 grid">
          {data.slice(0, 4).map((forum, index) => (
            <LandingForum forum={forum} key={index} />
          ))}
        </div>
        <p data-aos="fade-up" className="text-xs text-gray-500">
          Forum tidak mengandung kata SARA, Pornografi, dan Ungkapan kasar
        </p>
        <button
          data-aos="fade-up"
          onClick={handleOnClick}
          className="tracking-widest mt-5 py-3 px-6 bg-blue-600 hover:bg-blue-500 transition-all text-white"
        >
          DAFTAR SEKARANG
        </button>
      </div>
      <div className="absolute left-32 bottom-[-36px]">
        <Player autoplay loop className="w-72 h-72" src="/assets/tree.json" />
      </div>
      <div className="absolute right-32 bottom-[-36px]">
        <Player autoplay loop className="w-72 h-72" src="/assets/tree.json" />
      </div>
    </>
  );
}
