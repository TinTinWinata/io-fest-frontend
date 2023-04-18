import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../components/simple-button';

export default function LeftLanding() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/form');
  return (
    <div className="center" data-aos="fade-up">
      <div className="">
        <h1 className="font-bold text-7xl">Yuk Cari Tahu</h1>
        <h1 className="font-bold text-blue-500 dark:text-orange-600 text-7xl">
          Penyakitmu
        </h1>
        <p className="text-gray-400 text-2xl w-3/4 my-6 tracking-widest">
          Diabetes sudah memakan banyak korban. Apakah kamu salah satunya ?
        </p>
        <div className="">
          <SimpleButton
            moreClass="text-2xl py-5 px-20"
            text="Cari Tahu"
            handler={handleClick}
          ></SimpleButton>
        </div>
        <p className="my-3 text-gray-400 tracking-wide">
          Cari tahu beberapa berbahaya nya diabetes
        </p>
      </div>
    </div>
  );
}
