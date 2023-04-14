import { Button } from '../types/Button';

export default function SimpleButton({ text, handler, moreClass }: Button) {
  return (
    <button
      onClick={handler}
      type="button"
      className={
        'inline-flex items-center border border-transparent  leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none dark:bg-orange-600 ' +
        moreClass
      }
    >
      {text}
    </button>
  );
}
