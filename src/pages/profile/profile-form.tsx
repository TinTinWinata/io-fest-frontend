import { IUser } from '../../types/user';

export default function ProfileForm({ user }: { user: IUser }) {
  return (
    <div className="p-20">
      <form action=""></form>
      <div className="mt-10 divide-y divide-gray-200">
        <div className="space-y-1">
          <h3 className="dark:text-gray-50 text-lg leading-6 font-medium text-gray-900">
            My Account
          </h3>
          <p className="max-w-2xl text-sm text-gray-500 dark:text-gray-50">
            You can change your profile with your preferences.
          </p>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">
                Name
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow dark:text-gray-200">
                  {user.name}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white dark:bg-transparent rounded-md font-medium text-blue-600 dark:text-orange-500 dark:hover:text-orange-600 hover:text-blue-500 focus:outline-none   "
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">
                Username
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow dark:text-gray-200">
                  <span className="flex-grow dark:text-gray-200">
                    {user.username}
                  </span>
                </span>
                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                  <button
                    type="button"
                    className="bg-white dark:bg-transparent rounded-md font-medium text-blue-600 dark:text-orange-500 dark:hover:text-orange-600 hover:text-blue-500 focus:outline-none   "
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">
                Email
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow dark:text-gray-200">
                  {user.email}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white dark:bg-transparent rounded-md font-medium text-blue-600 dark:text-orange-500 dark:hover:text-orange-600 hover:text-blue-500 focus:outline-none   "
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">
                Role
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow dark:text-gray-200">
                  {user.role}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white dark:bg-transparent rounded-md font-medium text-blue-600 dark:text-orange-500 dark:hover:text-orange-600 hover:text-blue-500 focus:outline-none   "
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
