import { useUserAuth } from '../../hooks/user-context';
import { getImageUrl } from '../../utils/helper';

export default function SidebarBottom() {
  const { user, logout } = useUserAuth();
  const handleLogout = () => logout();
  return (
    <div className="leading-none text-center absolute bottom-0 right-0 h-20 w-full bg-blue-600 dark:bg-blue-600 rounded-br-xl">
      <div className="flex absolute top-[50%] translate-y-[-50%] left-2">
        <div className="center mr-2">
          <img
            src={getImageUrl(user.profilePicture)}
            className="w-9 h-9 rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <div className="center">
            <div className="text-gray-50 text-sm font-semibold align-bottom">
              {user.name}
            </div>
            <div className="ml-2 text-gray-300 text-sm font-medium align-top">
              ( {user.role} )
            </div>
          </div>
          <p
            onClick={handleLogout}
            className="text-gray-50 text-sm text-left font-semibold cursor-pointer hover:underline"
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
