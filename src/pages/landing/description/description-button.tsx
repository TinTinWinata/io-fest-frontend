import { FaArrowRight } from "react-icons/fa";

export default function DescriptionButton() {
  return (
    <div data-aos="fade-up" className="flex cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all text-blue-500 dark:text-orange-500 hover:underline">
      <p className=" font-serif  tracking-wide font-semibold">
        Cari Tahu Lebih Lanjut
      </p>
      <div className="center ml-1">
        <FaArrowRight className=" " />
      </div>
    </div>
  );
}
