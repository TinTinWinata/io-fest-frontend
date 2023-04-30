import { Player } from '@lottiefiles/react-lottie-player';
import { useTheme } from '../../../hooks/theme-context';
import DescriptionContent from './description-content';

export default function Description() {
  const { isDarkTheme } = useTheme();
  const getDivClass = () => 'text-center center my-40';
  return (
    <div className="relative overflow-hidden">
      <div className="absolute opacity-50 left-[-600px] w-full h-full z-0 text-red-300">
        <div className="transform scale-x-[-1]">
          <svg
            width="863"
            height="2207"
            viewBox="0 0 863 2207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M122.078 705C318 305 378 0.5 378 0.5H761.5C761.5 0.5 995.5 142 751.62 727C507.74 1312 731.5 2206.5 731.5 2206.5H272C-38.1576 1748.52 -73.8447 1105 122.078 705Z"
              fill={isDarkTheme ? '#141c2e' : '#eff6ff'}
            />
          </svg>
        </div>
      </div>
      {/* First */}
      <div className={getDivClass()}>
        <hr></hr>
        <DescriptionContent
          text="Stres dapat mempengaruhi kesehatan mental dan fisik seseorang. Ada
        beberapa cara mudah untuk mengurangi stres, seperti berolahraga,
        melakukan meditasi atau yoga, atau menghabiskan waktu dengan melakukan
        kegiatan yang disukai. Cobalah cari kegiatan yang dapat membantu
        meredakan stresmu agar tubuh dan pikiranmu tetap sehat."
          title="Cara Mengurangi Stres dengan Mudah"
        />
        <div className="pl-14">
          <Player
            // data-aos="fade-up"
            className="mt-5 w-96 h-96"
            autoplay
            loop
            src={'/assets/health.json'}
          />
        </div>
      </div>
      {/* Second */}
      <div className={getDivClass()}>
        <div className="pr-20">
          <Player
            // data-aos="fade-up"
            className="mt-5 w-96 h-96"
            autoplay
            loop
            src={'/assets/sleep.json'}
          />
        </div>
        <DescriptionContent
          text="Memastikan tidur yang cukup dan berkualitas merupakan bagian penting dari menjaga kesehatan. Kurang tidur dapat meningkatkan risiko obesitas, diabetes, dan masalah kesehatan lainnya."
          title="Tidur yang cukup dan berkualitas"
        />
      </div>
      {/* Third */}
      <div className={getDivClass()}>
        <DescriptionContent
          text="Melakukan pemeriksaan kesehatan secara teratur dapat membantu mencegah dan mendeteksi dini penyakit yang mungkin timbul. Pemeriksaan kesehatan yang dilakukan secara teratur dapat membantu menentukan gaya hidup dan pengobatan yang sesuai dengan kondisi kesehatanmu."
          title="Periksakan kesehatan secara teratur"
        />
        <div className="">
          <Player
            data-aos="fade-up"
            className="mt-5 w-[400px] h-[400px]"
            autoplay
            loop
            src={'/assets/check-up.json'}
          />
        </div>
      </div>
    </div>
  );
}
