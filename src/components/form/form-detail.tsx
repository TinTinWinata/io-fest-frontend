import { Dispatch, RefObject, SetStateAction } from 'react';
import { IFormQuestion } from '../../types/form-question';

interface FormDetailProps {
  form: IFormQuestion;
  activeBox: number;
  setActiveBox: Dispatch<SetStateAction<number>>;
  inputRef: RefObject<HTMLInputElement>;
}

export default function FormDetail({
  form,
  activeBox,
  setActiveBox,
  inputRef,
}: FormDetailProps) {
  const getAnswerClass = (index: number) =>
    `w-full border border-blue-600 dark:border-gray-700 cursor-pointer dark:border-opacity-30 border-opacity-20 rounded-md p-3 text-sm tracking-wider my-2 dark:hover:bg-blue-600 hover:bg-blue-600 hover:text-gray-50 transition-all dark:text-gray-200 ${
      index == activeBox ? getActiveClass() : ' text-gray-500 '
    }`;

  const getActiveClass = () => ' bg-blue-600 text-gray-50 dark:bg-blue-600 ';

  return (
    <div className="relative">
      <div className="font-bold  my-6 text-gray-700 tracking-wide text-left text-2xl dark:text-gray-100">
        {form.question}
      </div>
      <div className="hr"></div>
      {/* Answer */}
      <div className="overflow-y-scroll scrollbar-hide h-[300px]">
        {form.answerValue.length == 0 ? (
          <input
            ref={inputRef}
            placeholder={form.answer[0]}
            type=""
            className="w-full p-2 bg-transparent rounded-md border border-blue-600 border-opacity-20"
          />
        ) : (
          form.answer.map((answer, index) => (
            <div
              onClick={() => setActiveBox(index)}
              key={index}
              className={getAnswerClass(index)}
            >
              {answer}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
