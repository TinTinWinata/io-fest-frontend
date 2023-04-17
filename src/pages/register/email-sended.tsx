import { Player } from '@lottiefiles/react-lottie-player';

export default function RegistrationEmailSended({
  email,
  successRef,
}: {
  email: string;
  successRef: any;
}) {
  return (
    <div className="text-center relative ">
      <div className="absolute top-[-38px]">
        <Player src={'/assets/success.json'} autoplay loop ref={successRef} />
      </div>
      <div className="h-36"></div>
      <h1 className="font-semibold">Verify your email address</h1>
      <div className="center">
        <div className="flex text-gray-500 w-[80%] text-sm mt-1">
          <p>
            To start using Cari Tahu, we need to verify your email{' '}
            <span className="text-blue-400 dark:text-orange-400">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
