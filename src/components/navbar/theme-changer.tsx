import { ChangeEvent, createRef, useEffect } from 'react';
import { useTheme } from '../../hooks/theme-context';

export default function ThemeChanger() {
  const { setTheme, isDarkTheme } = useTheme();
  const checkRef = createRef<HTMLInputElement>();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked);
  };

  useEffect(() => {
    // To Do Check First Them
    if (checkRef && isDarkTheme) {
      checkRef.current!!.checked = isDarkTheme;
    }
  }, [isDarkTheme]);
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          ref={checkRef}
          onChange={handleOnChange}
          type="checkbox"
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none    rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
      </label>
    </>
  );
}
