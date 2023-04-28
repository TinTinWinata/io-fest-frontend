import { createRef, useEffect, useState } from 'react';
import { IFormAnswer } from '../../types/form-answer';
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
  const [answers, setAnswers] = useState<IFormAnswer[]>([]);
  const inputRef = createRef<HTMLInputElement>();

  const isCurrentQuestionIsInput = () => {
    return forms[index].answerValue.length == 0;
  };

  const getAnswer = (): number => {
    const currForm: IFormQuestion = forms[index];
    if (isCurrentQuestionIsInput()) {
      // Input Question
      return getAnswerInputRef();
    } else {
      // Answer Question
      return currForm.answerValue[activeBox];
    }
  };

  const getAnswerInputRef = (): number => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      inputRef.current.value = '';
      return parseInt(value);
    }
    return 0;
  };

  const isValidAnswer = (): boolean => {
    if (isCurrentQuestionIsInput()) {
      // Input Question
      if (inputRef.current) {
        if (inputRef.current.value.trim() == '') {
          toastError('Please input the valid fields!');
          return false;
        }
        try {
          parseInt(inputRef.current.value);
          return true;
        } catch (e) {
          toastError('Please input a valid input!');
        }
      } else {
        toastError('Input is not found, please contact Amigo Team!');
        return false;
      }
    } else {
      if (activeBox !== DEFAULT_ACTIVE) {
        return true;
      }
      toastError('You need to select at least one answer.');
      return false;
    }
    return false;
  };

  const handleAddAnswer = () => {
    const newAnswer: IFormAnswer = {
      name: forms[index].questionValue,
      value: getAnswer(),
    };
    setAnswers((prev) => [...prev, newAnswer]);
  };

  const handleNext = () => {
    if (isValidAnswer()) {
      // Add Answer
      handleAddAnswer();

      // Set Current Index
      index + 1 < forms.length ? setIndex(index + 1) : setFinish(true);
      setActiveBox(DEFAULT_ACTIVE);
    }
  };

  useEffect(() => console.log('answers : ', answers), [answers]);

  if (finish) {
    return (
      <div className="relative w-96  p-6 dark:bg-transparent bg-gray-50 rounded-xl dark:border dark:border-opacity-50 dark:border-gray-600">
        <Finish answers={answers} />
      </div>
    );
  }

  return (
    <div className="relative w-96 h-[600px] p-6 dark:bg-transparent dark:border dark:border-opacity-50 dark:border-gray-600 bg-gray-50 rounded-xl">
      <ProgressBar from={index + 1} to={forms.length} />

      <FormDetail
        inputRef={inputRef}
        activeBox={activeBox}
        setActiveBox={setActiveBox}
        form={forms[index]}
      />
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
