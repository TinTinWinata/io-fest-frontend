import ForumCard from '../../../components/forum-card';
import useForum from '../../../hooks/use-forum';

export default function TopForum() {
  const { data } = useForum();
  return (
    <div>
      <h1 className="text-[30px] font-bold">Top Forum</h1>

      <div className="flex">
        {data.slice(0, 3).map((forum) => (
          <ForumCard forum={forum} />
        ))}
      </div>
    </div>
  );
}
