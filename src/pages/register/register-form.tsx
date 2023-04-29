import { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm({
  handleSubmit,
}: {
  handleSubmit: FormEventHandler;
}) {
  const getInputClass = () =>
    'dark:border-gray-500 dark:border-opacity-40 dark:bg-transparent mb-3 ml-[3px] appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm';

  return (
    <>
      <div>
        <h2 className="font-serif ml-2 mt-2 text-3xl font-bold text-gray-600 dark:text-gray-50">
          Registrasi Akun
        </h2>
        <hr className="h-1 w-full my-3" />
      </div>
      <form onSubmit={handleSubmit} className="">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="font-medium ml-1 text-sm">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={getInputClass()}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium ml-1 text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={getInputClass()}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium ml-1 text-sm">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="username"
              required
              className={getInputClass()}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium ml-1 text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              className={getInputClass()}
              placeholder=""
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="transition-all dark:bg-blue-600 dark:hover:bg-blue-500 mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Buat Akun
          </button>
          <div className="mt-2 ml-2 text-right text-sm">
            <Link
              to="/login"
              className="transition-all font-medium dark:text-blue-600 dark:hover:text-blue-500 text-blue-600 hover:text-blue-500"
            >
              Sudah punya akun ?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
