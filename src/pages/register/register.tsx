import { createRef, useState } from 'react';
import '../../css/gradient.css';
import { useTheme } from '../../hooks/theme-context';
import { useUserAuth } from '../../hooks/user-context';
import { IRegisterForm } from '../../types/auth';
import RegistrationEmailSended from './email-sended';
import RegisterForm from './register-form';

export default function Register() {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const { register } = useUserAuth();
  const { isDarkTheme } = useTheme();
  const [email, setEmail] = useState<string>('');
  const successRef = createRef<any>();

  const handleSuccessRegistration = (email: string) => {
    setEmail(email);
    setShowEmail(true);
    try {
      successRef.current.play();
    } catch (e) {
      console.log('error : ', e);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data: IRegisterForm = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
      username: e.target.username.value,
    };
    const resp = await register(data);
    if (resp) handleSuccessRegistration(data.email);
  };

  const getDarkClass = () => (isDarkTheme ? 'bg-gray-900' : 'gradient');

  return (
    <div
      className={
        'min-h-screen w-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 ' +
        getDarkClass()
      }
    >
      <div className="p-8 rounded-lg bg-white dark:bg-gray-900  dark:border-gray-500 dark:border-opacity-50 dark:border max-w-md w-full space-y-8">
        {showEmail ? (
          <RegistrationEmailSended successRef={successRef} email={email} />
        ) : (
          <RegisterForm handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}
