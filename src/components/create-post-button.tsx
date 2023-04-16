import { Player } from '@lottiefiles/react-lottie-player';
import { ChangeEvent, createRef, useState } from 'react';
import { useUserAuth } from '../hooks/user-context';
import CreateForum from '../modals/create-forum';
import { toastError } from '../utils/toast';

export default function CreatePostButton() {
  const playerRef = createRef<any>();
  const inputRef = createRef<HTMLInputElement>();
  const [text, setText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const { isAuth } = useUserAuth();
  const handleOnFocus = () => {
    if (inputRef.current) inputRef.current.value = text;
    playerRef.current.play();
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAuth) {
      setOpen(true);
    } else {
      toastError("You're not authorized to make post forum!");
    }
  };
  const handleOnBlur = () => {
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <>
      <CreateForum
        handleTitle={handleOnChange}
        title={text}
        open={open}
        setOpen={setOpen}
      ></CreateForum>
      <form
        noValidate
        onSubmit={handleOnSubmit}
        className="fixed bottom-14 right-20"
      >
        <div className="flex">
          <input
            value={text}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            ref={inputRef}
            onFocus={handleOnFocus}
            type="search"
            id="default-search"
            className=" italic font-medium w-[230px] block p-4 pl-10 text-xl text-gray-50 border placeholder-gray-50 border-blue-500 rounded-lg bg-blue-400 dark:bg-orange-400 dark:border-orange-500 focus:none focus:outline-none focus:w-[400px] transition-all"
            placeholder="Create Post"
            required
          />
          <div className="relative">
            <button
              className="dark:bg-orange-500 dark:hover:bg-orange-600 cursor-pointer absolute left-[-40px] rounded-[100%] w-20 h-20 top-[50%] translate-y-[-50%]  hover:bg-blue-600 transition-all bg-blue-500"
              type="submit"
            >
              <Player
                ref={playerRef}
                hover
                className="w-[60px] abs-center"
                src={'/assets/create.json'}
              ></Player>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
