export default function ProgressBar({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  const calculateProgress = () => (from / to) * 100;

  return (
    <>
      <p className="mb-1 text-md text-gray-500 dark:text-gray-200">{`Question ${from} / ${to}`}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`w-[${calculateProgress()}%] transition-all dark:bg-orange-600 bg-blue-600 h-2.5 rounded-full`}
        ></div>
      </div>
    </>
  );
}
