import { useState } from 'react';
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IForum } from '../types/forum';
import { getImageUrl } from '../utils/helper';

interface ILandingForumProps {
  forum: IForum;
}

export default function LandingForum({ forum }: ILandingForumProps) {
  const [hover, setHover] = useState<boolean>(false);
  const getSymbolClass = () => `w-5 h-5 mx-3 transition-all`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${forum.id}`);
  };
  const handleOnMouseEnter = () => setHover(true);
  const handleOnMouseLeave = () => setHover(false);

  const getImageBaseClass = () =>
    'transition-all absolute translate-x-[-50%] left-[50%] rounded-full w-12 h-12 translate-y-[50%] bottom-0';
  const getImageOnHoverClass = () =>
    'transition-all absolute translate-x-[-50%] left-[50%] rounded-full w-12 h-12 translate-y-[0%] bottom-3';
  const getImageClass = () =>
    hover ? getImageOnHoverClass() : getImageBaseClass();

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleClick}
      className="hover:cursor-pointer rounded-lg border border-black  m-2 relative overflow-hidden w-72 h-52 bg-gray-50"
    >
      <div className={`absolute p-5 w-full h-full ${hover && 'opacity-50'}`}>
        <div className="tracking-widest font-bold text-lg">
          {forum.creator.name}, {forum.creator.username}
        </div>
        <div className="my-6 truncate text-sm text-gray-500 tracking-wide">
          {forum.description}
        </div>
        <div className="center">
          <FaAddressBook className={getSymbolClass() + ' text-orange-500'} />
          <FaFacebook className={getSymbolClass() + ' text-indigo-500'} />
          <FaInstagram className={getSymbolClass() + ' text-pink-500'} />
          <FaLinkedin className={getSymbolClass() + ' text-blue-600'} />
        </div>
      </div>
      <img
        className={getImageClass()}
        src={getImageUrl(forum.creator.profilePicture)}
      />
    </div>
  );
}