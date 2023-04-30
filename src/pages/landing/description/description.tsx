import { Player } from '@lottiefiles/react-lottie-player';
import { useTheme } from '../../../hooks/theme-context';
import DescriptionContent from './description-content';

export default function Description() {
  const { isDarkTheme } = useTheme();
  const getDivClass = () => 'text-center center w-fit my-24 ';
  return (
    <div className="relative overflow-hidden ">
      {/* <div className="absolute opacity-50 left-[-600px] w-full h-full z-0 text-red-300">
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
      </div> */}
      {/* First */}
      <div className={getDivClass()}>
        <DescriptionContent
          side="right"
          text="Stres dapat berdampak negatif pada kesehatan mental dan fisik seseorang. Namun, ada cara mudah untuk mengurangi stres, seperti berolahraga, meditasi, dan melakukan kegiatan yang disukai."
          title="Mengurangi Stres "
        />
        <div className="flex ml-20 w-[50%]">
          <Player
            // data-aos="fade-up"
            className="mt-5 w-[500px] h-[500px]"
            autoplay
            loop
            src={'/assets/work.json'}
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
          side="left"
          text="Memastikan tidur yang cukup dan berkualitas merupakan bagian penting dari menjaga kesehatan. Kurang tidur dapat meningkatkan risiko obesitas, diabetes, dan masalah kesehatan lainnya."
          title="Tidur Cukup dan Berkualitas"
        />
      </div>
      {/* Third */}
      <div className={getDivClass()}>
        <DescriptionContent
          side="right"
          text="Melakukan pemeriksaan kesehatan secara teratur dapat membantu mencegah dan mendeteksi dini penyakit yang mungkin timbul. Pemeriksaan kesehatan yang dilakukan secara teratur dapat membantu menentukan gaya hidup."
          title="Pemeriksaan Kesehatan Rutin"
        />
        <div className="flex justify-end ml-20 w-[50%] transform scale-x-[-1]">
          <Player
            // style={{ width: '450px' }}
            data-aos="fade-up"
            className="mt-5 w-[450px]"
            autoplay
            loop
            src={'/assets/check-up.json'}
          />
        </div>
      </div>
    </div>
  );
}
