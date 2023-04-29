/* This example requires Tailwind CSS v2.0+ */

import { Dispatch, SetStateAction } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface IPaginationProps {
  totalForum: number;
  perPage: number;
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  isHasNext: () => boolean;
  isHasPrev: () => boolean;
  hasPage: (page: number) => boolean;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  totalForum,
  perPage,
  page,
  nextPage,
  isHasPrev,
  isHasNext,
  prevPage,
  hasPage,
  setPage,
}: IPaginationProps) {
  const getDefaultClass = () =>
    'cursor-pointer  border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium';

  const getActiveClass = () =>
    'cursor-pointer dark:border-blue-500 dark:text-blue-600 border-blue-500 text-blue-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium';

  const getClass = (tempPage: number) =>
    tempPage === page ? getActiveClass() : getDefaultClass();

  const startingIndex = page - 2;

  const generateArr = (): number[] =>
    Array.from({ length: 5 }, (_, i) => i + startingIndex);

  return (
    <nav className="border-t border-gray-200 dark:border-gray-600 px-4  flex items-center justify-evenly sm:px-0">
      <div className="flex w-32 ">
        {isHasPrev() && (
          <div
            onClick={prevPage}
            className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            <FaArrowLeft
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </div>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {generateArr().map(
          (number) =>
            hasPage(number) && (
              <div
                onClick={() => {
                  setPage(number);
                }}
                key={number}
                className={getClass(number)}
              >
                {number}
              </div>
            )
        )}
      </div>
      <div className="flex justify-end w-32">
        {isHasNext() && (
          <div
            onClick={nextPage}
            className="cursor-pointer border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <FaArrowRight
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
