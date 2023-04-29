import DescriptionButton from './description-button';

interface IDescriptionContentProps {
  title: string;
  text: string;
}

export default function DescriptionContent({
  title,
  text,
}: IDescriptionContentProps) {
  return (
    <div className="w-1/2 text-left">
      <h1 data-aos="fade-up" className="font-bold text-5xl font-serif">
        {title}
      </h1>
      <p
        data-aos="fade-up"
        className="text-gray-500 tracking-wider w-3/4 my-5 text-sm leading-7 font-semibold"
      >
        {text}
      </p>
      <DescriptionButton />
    </div>
  );
}
