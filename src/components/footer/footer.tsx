import Icon from './icon';

export default function Footer() {
  return (
    <div className="h-20 w-full bg-gray-100 dark:bg-gray-800 center">
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
              more_class: 'bg-red-100',
            }}
          />
          <Icon
            icon={{
              click_url: 'https://facebook.com/',
              image_url: '/assets/icon/facebook-240.png',
              more_class: 'bg-blue-100',
            }}
          />
          <Icon
            icon={{
              click_url: 'https://discord.com/',
              image_url: '/assets/icon/discord-240.png',
              more_class: 'bg-violet-100',
            }}
          />
        </div>
        <div className="w-full flex"></div>
      </div>
    </div>
  );
}
