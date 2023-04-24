import { Link } from 'react-router-dom';
import '../css/gradient.css';
import { useTheme } from '../hooks/theme-context';
import { useUserAuth } from '../hooks/user-context';
import { ILoginForm } from '../types/auth';

export default function Login() {
  const { isDarkTheme } = useTheme();
  const { login } = useUserAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data: ILoginForm = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await login(data);
  };

  const getDarkClass = () => (isDarkTheme ? 'bg-gray-900' : 'gradient');

  return (
    <div className="relative min-h-screen w-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div
        className={'absolute w-full h-full left-0 top-0 ' + getDarkClass()}
      ></div>
      {/* <div className="absolute w-full h-full blur-lg  bg-gray-500 opacity-50 left-0 top-0"></div> */}

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="relative z-40 bg-white dark:bg-gray-900 dark:border-gray-500 dark:border-opacity-50 dark:border py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-50">
              Login
            </h2>
            <hr className=""></hr>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-50"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="dark:border-opacity-40 dark:bg-transparent appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-50"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="dark:bg-transparent dark:border-opacity-40 appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4  text-blue-600  focus:ring-blue-500 border-gray-400 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-50"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:text-orange-600"
                >
                  Create your account here
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="transition-all w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-orange-600 hover:dark:bg-orange-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className=" px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-100">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
