import LandingForum from '../../../components/landing-forum';
import useForum from '../../../hooks/use-forum';

export default function TopForum() {
  const { data } = useForum();
  return (
    <div className="flex justify-center text-center items-center flex-col">
      <h1 className="text-3xl font-bold">Unique plans for your unique life</h1>
      <p className="text-lg font-semibold p-5">
        You’re paying for what you need with no extra costs or fees.
      </p>
      <div className="grid-cols-2 grid">
        {data.slice(0, 4).map((forum, index) => (
          <LandingForum forum={forum} key={index} />
        ))}
      </div>
      <p className="text-xs text-gray-500">
        Based on a 20-year term in the preferred plus health class
      </p>
      <button className="tracking-widest mt-5 py-3 px-5 bg-blue-600 hover:bg-blue-500 transition-all text-white">
        JOIN NOW
      </button>
    </div>
  );
}
