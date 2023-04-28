import { useNavigate } from 'react-router-dom';
import LandingForum from '../../../components/landing-forum';
import useForum from '../../../hooks/use-forum';

export default function TopForum() {
  const { data } = useForum();
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/register');
  return (
    <div className="flex justify-center text-center items-center flex-col">
      <h1 className="text-4xl font-serif font-bold">
        Forum teratas di CariTahu.id
      </h1>
      <p className="opacity-90 text-lg font-semibold p-5">
        Bertanya Tak Merugikan Cegah Penyakit Sebelum Terlambat, Yuk Cari Tahu!
      </p>
      <div className="grid-cols-2 grid">
        {data.slice(0, 4).map((forum, index) => (
          <LandingForum forum={forum} key={index} />
        ))}
      </div>
      <p className="text-xs text-gray-500">
        Forum tidak mengandung kata SARA, Pornografi, dan Ungkapan kasar
      </p>
      <button
        onClick={handleOnClick}
        className="tracking-widest mt-5 py-3 px-6 bg-blue-600 hover:bg-blue-500 transition-all text-white"
      >
        DAFTAR SEKARANG
      </button>
    </div>
  );
}
