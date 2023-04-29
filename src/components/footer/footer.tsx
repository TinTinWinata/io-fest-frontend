import { useLocation } from 'react-router-dom';
import Icon from './icon';

const NO_FOOTER_PATH = ['/login', '/register'];
const DARK_FOOTER_PATH = ['/'];

export default function Footer() {
  const location = useLocation();
  const isShowFooter = () => NO_FOOTER_PATH.includes(location.pathname);
  const isDarkFooter = () => DARK_FOOTER_PATH.includes(location.pathname);
  const getClass = () =>
    'h-20 w-full  center ' +
    (isDarkFooter()
      ? ' bg-dark-blue-calm dark:bg-dark-blue-calm '
      : ' bg-blue-50 dark:bg-gray-800');

  if (isShowFooter()) return <></>;
  else
    return (
      <div className={getClass()}>
        <div className="flex justify-between w-full">
          <div className="w-full pl-5">
            <div className="flex flex-col">
              {/* <p className=" text-gray-500 italic">Copyright ©</p> */}
              {/* <p className="text-gray-500 italic text-sm">JT - JS - RE</p> */}
            </div>
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
