import useVerification from '../../hooks/use-verification';
import VerificationResult from './verification-result';

export default function Verification() {
  const { loading, success } = useVerification();
  // const success = true;

  if (loading) {
    return <div className="center"></div>;
  }

  return (
    <div className="center relative rounded-lg ">
      {success ? (
        <VerificationResult
          jsonUrl="/assets/success-2.json"
          text="You're account has been activated, please proceed to login page!"
        />
      ) : (
        <VerificationResult
          jsonUrl="/assets/error.json"
          text="Look's like you're link is expired or it's already activated!"
        />
      )}
    </div>
  );
}
