import InvicibleNavbar from '../../components/invicible-navbar';
import { EXAMPLE_USER } from '../../types/user';
import ProfileForm from './profile-form';

export default function Profile() {
  const user = EXAMPLE_USER;
  return (
    <div className="w-[80vw] min-h-screen mb-20">
      <InvicibleNavbar />
      <div className="w-full rounded-3xl bg-white dark:bg-transparent border border-green">
        {/* Header */}
        <div className="bg-login bg-cover rounded-3xl w-full bg-blue-300  dark:bg-orange-300 h-[300px] relative">
          <div className="absolute rounded-3xl w-full h-full bg-gray-500 dark:bg-gray-800 opacity-50"></div>
          <div className="absolute bottom-0 w-full h-[1px] bg-white">
            <div className="flex absolute left-20 bottom-0 translate-y-[50%]">
              <img
                className="bg-cover w-44 h-44 rounded-full "
                src={user.imageUrl}
              />
              <div className="flex mb-10 justify-center ml-6 flex-col">
                <div className="text-[50px] mb-3 text-white  font-semibold">
                  <p className="shadow-xl">{user.name}</p>
                </div>
                <div className="text-md font-semibold ml-1">{user.email}</div>
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
