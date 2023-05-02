import { useLocation } from 'react-router-dom';
import Icon from './icon';

const NO_FOOTER_PATH = ['/login', '/register'];
const DARK_FOOTER_PATH = ['/'];

export default function Footer() {
  const location = useLocation();
  const isShowFooter = () => NO_FOOTER_PATH.includes(location.pathname);
  const isDarkFooter = () => DARK_FOOTER_PATH.includes(location.pathname);
  const getClass = () =>
    'h-32 md:h-20 w-full  center ' +
    (isDarkFooter()
      ? ' bg-dark-blue-calm dark:bg-gray-950 '
      : ' bg-blue-50 dark:bg-gray-800');

  if (isShowFooter()) return <></>;
  else
    return (
      <div className={getClass()}>
        <div className="flex justify-between w-full">
          <div className="w-full relative pl-5">
            <p
              className={
                '  italic w-1/2 md:w-full text-xs absolute left-5 bottom-0 ' +
                (isDarkFooter() ? 'text-gray-50' : 'text-gray-500')
              }
            >
              Copyright © JT - JS - RE
            </p>
          </div>
          <div className="w-full flex justify-center mr-3">
            <Icon
              icon={{
                click_url: 'https://instagram.com/',
                image_url: '/assets/icon/instagram-240.png',
                more_class: 'bg-red-100 bg-opacity-100',
              }}
            />
            <Icon
              icon={{
                click_url: 'https://facebook.com/',
                image_url: '/assets/icon/facebook-240.png',
                more_class: 'bg-blue-100 bg-opacity-100',
              }}
            />
            <Icon
              icon={{
                click_url: 'https://discord.com/',
                image_url: '/assets/icon/discord-240.png',
                more_class: 'bg-violet-100 bg-opacity-100',
              }}
            />
          </div>
          <div className="w-full flex"></div>
        </div>
      </div>
    );
}
