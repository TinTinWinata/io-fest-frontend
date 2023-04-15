import { IForum } from '../types/forum';
import ForumCard from './forum-card';

export default function ForumCardContainer({ forums }: { forums: IForum[] }) {
  return (
    <div className="flex flex-wrap">
      {forums.map((forum, index) => (
        <ForumCard forum={forum} key={index}></ForumCard>
      ))}
    </div>
  );
}
