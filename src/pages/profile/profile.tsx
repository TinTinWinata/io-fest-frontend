import { ChangeEvent } from 'react';
import InvicibleNavbar from '../../components/invicible-navbar';
import { useUserAuth } from '../../hooks/user-context';
import { getImageUrl } from '../../utils/helper';
import ProfileForm from './profile-form';

export default function Profile() {
  const { user, changeProfilePicture } = useUserAuth();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file: File | undefined = e.target.files?.[0];
    if (file && file !== undefined) changeProfilePicture(file);
  };

  return (
    <div className="w-[80vw] min-h-screen mb-20">
      <InvicibleNavbar />
      <div className="w-full rounded-3xl shadow-sm bg-white dark:bg-transparent border dark:border-blue-500">
        {/* Header */}
        <div className="bg-login bg-cover rounded-3xl w-full bg-blue-300  dark:bg-blue-300 h-[300px] relative">
          <div className="absolute rounded-3xl w-full h-full bg-gray-500 dark:bg-gray-800 opacity-50"></div>
          <div className="absolute bottom-0 w-full h-[1px] bg-white dark:bg-transparent">
            <div className="flex items-center absolute left-4 md:left-20 bottom-0  translate-y-[50%]">
              <input
                type="file"
                onChange={handleOnChange}
                hidden
                accept="*.jpg, *.png"
                id="imagePicker"
              />
              <label htmlFor="imagePicker">
                <img
                  className="cursor-pointer bg-cover w-20 h-20 md:w-44 md:h-44 rounded-full "
                  src={getImageUrl(user.profilePicture)}
                />
              </label>
              <div className="flex mb-3 md:mb-10  justify-center ml-6 flex-col">
                <div className="text-[30px] md:text-[50px] mb-3 text-white  font-semibold">
                  <p className="shadow-xl">{user.name}</p>
                </div>
                <div className="text:sm md:text-md font-semibold ml-1">
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <ProfileForm user={user} />
      </div>
    </div>
  );
}
