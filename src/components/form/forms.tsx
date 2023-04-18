import { useState } from 'react';
import { IFormQuestion } from '../../types/form-question';
import { toastError } from '../../utils/toast';
import Finish from './finish';
import FormDetail from './form-detail';
import ProgressBar from './progress-bar';

const DEFAULT_ACTIVE = -1;

export default function Forms({ forms }: { forms: IFormQuestion[] }) {
  const [finish, setFinish] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [activeBox, setActiveBox] = useState<number>(DEFAULT_ACTIVE);
  const handleNext = () => {
    if (activeBox !== DEFAULT_ACTIVE) {
      index + 1 < forms.length ? setIndex(index + 1) : setFinish(true);
      setActiveBox(DEFAULT_ACTIVE);
    } else {
      toastError('You need to select at least one answer.');
    }
  };

  if (finish) {
    return (
      <div className="relative w-96  p-6 dark:bg-transparent bg-gray-50 rounded-xl dark:border dark:border-opacity-50 dark:border-gray-600">
        <Finish />
      </div>
    );
  }

  return (
    <div className="relative w-96 h-[600px] p-6 dark:bg-transparent dark:border dark:border-opacity-50 dark:border-gray-600 bg-gray-50 rounded-xl">
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
          className=" w-full bg-blue-600 dark:bg-orange-600  dark:hover:bg-orange-500 hover:bg-blue-500 transition-all center text-gray-50 p-5 rounded-b-xl font-semibold"
        >
          Next
        </div>
      </div>
    </div>
  );
}
