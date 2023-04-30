import { FaArrowRight } from 'react-icons/fa';

export default function DescriptionButton() {
  return (
    <div
      data-aos="fade-up"
      className="flex cursor-pointer hover:text-blue-600 dark:hover:text-blue-600 transition-all text-blue-500 dark:text-blue-500 hover:underline"
    >
      <p className="tracking-wide font-semibold">Cari Tahu Lebih Lanjut</p>
      <div className="center ml-1">
        <FaArrowRight className=" " />
      </div>
    </div>
  );
}
