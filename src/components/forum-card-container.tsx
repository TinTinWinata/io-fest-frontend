import { IForum } from '../types/forum';
import ForumCard from './forum-card';

export default function ForumCardContainer({ forums }: { forums: IForum[] }) {
  return (
    <div className="justify-center grid grid-cols-3 gap-4 min-h-[700px]">
      {forums.map((forum, index) => (
        <ForumCard forum={forum} key={index}></ForumCard>
      ))}
    </div>
  );
}
