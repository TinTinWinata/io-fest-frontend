import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../components/simple-button';

export default function LeftLanding() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/form');
  return (
    <div className="center " data-aos="fade-right">
      <div className="w-fit px-10">
        <h1 className="font-bold text-2xl md:text-7xl font-serif">
          Yuk Cari Tahu
        </h1>
        <h1 className="font-bold text-blue-500 font-serif dark:text-blue-600 text-2xl md:text-7xl">
          Penyakitmu
        </h1>
        <p className="text-gray-400 text-md md:text-2xl dark:text-gray-200 w-3/4 my-6 tracking-widest">
          Diabetes sudah memakan banyak korban. Apakah kamu salah satunya ?
        </p>
        <div className="">
          <SimpleButton
            moreClass="text-md md:text-2xl py-3 px-8 md:px-20 md:py-5 px-20"
            text="Cari Tahu"
            handler={handleClick}
          ></SimpleButton>
        </div>
        <p className="dark:text-gray-300 my-3 text-sm md:text-md text-gray-400 tracking-wide">
          Cari tahu beberapa berbahaya nya diabetes
        </p>
      </div>
    </div>
  );
}
