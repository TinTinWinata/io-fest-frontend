import DescriptionButton from './description-button';

interface IDescriptionContentProps {
  title: string;
  text: string;
  side: string;
}

export default function DescriptionContent({
  title,
  text,
  side,
}: IDescriptionContentProps) {
  const getExtraClass = () =>
    side === 'left' ? 'text-left' : 'text-right items-end  ';
  return (
    <div
      className={
        ' p-10 md:p-0 w-full md:w-5/12 flex flex-col  ' + getExtraClass()
      }
    >
      <h1
        data-aos="fade-up"
        className="w-full md:w-7/12 font-semibold  text-3xl md:text-5xl  font-serif"
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        className="text-gray-500 dark:text-gray-300 tracking-wider w-full md:w-3/4 my-8 text-md leading-4 md:leading-7 font-normal"
      >
        {text}
      </p>
      <DescriptionButton />
    </div>
  );
}
