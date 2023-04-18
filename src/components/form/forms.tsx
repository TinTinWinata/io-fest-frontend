import { useState } from 'react';
import { IFormQuestion } from '../../types/form-question';
import Finish from './finish';
import FormDetail from './form-detail';
import ProgressBar from './progress-bar';

export default function Forms({ forms }: { forms: IFormQuestion[] }) {
  const [finish, setFinish] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [activeBox, setActiveBox] = useState<number>(-1);
  const handleNext = () => {
    index + 1 < forms.length ? setIndex(index + 1) : setFinish(true);
    setActiveBox(-1);
  };

  if (finish) {
    return (
      <div className="relative w-96  p-6 dark:bg-orange-600 bg-gray-50 rounded-xl">
        <Finish />
      </div>
    );
  }

  return (
    <div className="relative w-96 h-[600px] p-6 dark:bg-orange-600 bg-gray-50 rounded-xl">
      <ProgressBar from={index + 1} to={forms.length} />

      {finish ? (
        <Finish />
      ) : (
        <FormDetail
          activeBox={activeBox}
          setActiveBox={setActiveBox}
          form={forms[index]}
        />
      )}

      {/* Next button */}
      <div className="w-full center translate-x-[-50%] left-[50%] absolute bottom-0">
        <div
          onClick={handleNext}
          className=" w-full bg-blue-600 hover:bg-blue-500 transition-all center text-gray-50 p-5 rounded-b-xl font-semibold"
        >
          Next
        </div>
      </div>
    </div>
  );
}
