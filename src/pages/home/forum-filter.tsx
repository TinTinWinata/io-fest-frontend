/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from '@headlessui/react';

import { Dispatch, Fragment, SetStateAction } from 'react';
import { FaNewspaper, FaSort, FaStar } from 'react-icons/fa';
import { FORUM_FILTER } from '../../hooks/use-forum';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface IForumFilterProps {
  setFilter: Dispatch<SetStateAction<FORUM_FILTER>>;
}

export default function ForumFilter({ setFilter }: IForumFilterProps) {
  return (
    <Menu as="div" className="relative inline-block text-left w-[150px]">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 dark:bg-transparent dark:text-gray-50 dark:border-blue-500 dark:border-opacity-50 hover:bg-gray-50 focus:outline-none ">
              Sort
              <FaSort className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right z-[50] absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div className="">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => setFilter(FORUM_FILTER.Top)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'group flex items-center px-4 py-3 text-sm'
                      )}
                    >
                      <FaStar
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Top
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div className="">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => setFilter(FORUM_FILTER.Newest)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'group flex items-center px-4 py-3 text-sm'
                      )}
                    >
                      <FaNewspaper
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Newest
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
