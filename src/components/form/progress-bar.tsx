import { useEffect, useState } from 'react';

export default function ProgressBar({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  const [progress, setProgress] = useState<number>(0);
  const calculateProgress = () => setProgress(Math.ceil((from / to) * 100));
  useEffect(() => calculateProgress(), [from, to]);
  return (
    <>
      <p className="mb-1 text-md text-gray-500 dark:text-gray-200">{`Question ${from} / ${to}`}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          // style={{width: `${calculateProgress()}`}}
          className={`w-[${progress}%] transition-all dark:bg-blue-600 bg-blue-600 h-2.5 rounded-full`}
        ></div>
      </div>
    </>
  );
}
