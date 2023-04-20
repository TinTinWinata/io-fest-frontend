import InvicibleNavbar from '../../components/invicible-navbar';
import { EXAMPLE_USER } from '../../types/user';

export default function Profile() {
  const user = EXAMPLE_USER;
  return (
    <div className="w-[80vw] h-screen">
      <InvicibleNavbar />
      <div className="w-full rounded-3xl bg-white border border-green">
        {/* Header */}
        <div className="bg-login rounded-3xl w-full bg-blue-300  dark:bg-orange-300 h-[300px] relative">
          <div className="absolute rounded-3xl w-full h-full bg-gray-500 opacity-50"></div>
          <div className="absolute bottom-0 w-full h-[1px] bg-white">
            <div className="flex absolute left-20 bottom-0 translate-y-[50%]">
              <img className="w-44 h-44 rounded-full " src={user.imageUrl} />
              <div className="flex mb-2 justify-center ml-2 flex-col">
                <div className="text-2xl text-gray-50 font-semibold">
                  {user.name}
                </div>
                <div className="text-xl">{user.email}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Random Gap  */}
        <div className="h-32"></div>

        {/* Form */}
        <div className="p-20">
          <form action=""></form>
          <p>Justine Winata</p>
        </div>
      </div>
    </div>
  );
}
