import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import LandingForum from '../../../components/landing-forum';
import useForum from '../../../hooks/use-forum';
import TopForumCloud from './top-forum-cloud';

export default function TopForum() {
  const { data } = useForum();
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/register');
  return (
    <>
      <div
        data-aos="fade-up"
        className="px-10 relative flex justify-center text-center items-center flex-col"
      >
        <div className="hidden md:block">
          <TopForumCloud />
        </div>
        <h1
          className="px-2 text-2xl md:text-4xl font-serif font-bold"
          data-aos="fade-up"
        >
          Forum Teratas di CariTahu.id
        </h1>
        <p
          className="opacity-90 text-sm md:text-lg font-semibold p-5"
          data-aos="fade-up"
        >
          Bertanya Tak Merugikan Cegah Penyakit Sebelum Terlambat, Yuk Cari
          Tahu!
        </p>
        <div className="grid-cols-1 md:grid-cols-2 justify-center grid">
          {data.slice(0, 4).map((forum, index) => {
            const getClass = () => (index >= 2 ? 'md:block hidden' : '');
            return (
              <div className={getClass()} key={index}>
                <LandingForum forum={forum} />
              </div>
            );
          })}
        </div>
        <p
          data-aos="fade-up"
          className="text-sm text-gray-500 dark:text-gray-200"
        >
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
      <div className="md:block hidden absolute left-32 bottom-[-36px]">
        <Player autoplay loop className="w-72 h-72" src="/assets/tree.json" />
      </div>
      <div className="absolute  md:right-32 right-[50%] translate-x-[50%]  bottom-[-20px] md:bottom-[-36px]">
        <Player
          autoplay
          loop
          className="w-44 h-44 md:w-72 md:h-72"
          src="/assets/tree.json"
        />
      </div>
    </>
  );
}
