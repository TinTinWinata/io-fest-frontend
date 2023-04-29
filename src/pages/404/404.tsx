import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../components/simple-button';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handlerButton = () => {
    navigate('/');
  };
  return (
    <div className="center w-screen h-screen">
      <div className="text-center">
        <div className="w-[500px] h-[400px]">
          <Player autoplay loop src={'/assets/404.json'} />
        </div>
        <div data-aos="fade-up" className="">
          <h1 className="font-semibold text-4xl mt-8 font-serif">
            Sepertinya Anda Kebigungan
          </h1>
          <p className="mt-2 text-md font-normal">Ada yang bisa kami bantu?</p>
          <SimpleButton
            text="Kembali Ke Halaman Utama"
            moreClass="p-3 w-full center mt-5"
            handler={handlerButton}
          />
        </div>
      </div>
    </div>
  );
}
