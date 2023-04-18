import InvicibleNavbar from '../../components/invicible-navbar';
import { IComment } from '../../types/comment';
import { IForum } from '../../types/forum';
import { IUser } from '../../types/user';
import Comment from './comment';
import CreateComment from './create-comment';

const EXAMPLE_USER: IUser = {
  isActive: false,
  password: 'false',
  username: 'asd',
  id: 'id',
  email: 'tintin6892@gmail.com',
  name: 'tintin',
  role: 'Doctor',
  imageUrl: 'https://picsum.photos/200',
};

const EXAMPLE_FORUMS: IForum = {
  comment: 20,
  description:
    'Selamat pagi Dok, mau tanya.saya sudah telat haid 6 hari. Saya test negatif. Dan tadi pagi saya keluar flek coklat. Apakah saya mau haid atau saya hamil dok? Mohon penjelasannya.terimakasih',
  title: 'Sakit Berdarah',
  user: EXAMPLE_USER,
  seen: 3000,
};

const EXAMPLE_COMMENTS: IComment[] = [
  {
    user: EXAMPLE_USER,
    text: 'Kamu ngapain aja ? kok bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu',
  },
  {
    user: EXAMPLE_USER,
    text: 'Kamu ngapain aja ? kok bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu',
  },
  {
    user: EXAMPLE_USER,
    text: 'Kamu ngapain aja ? kok bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu',
  },
  {
    user: EXAMPLE_USER,
    text: 'Kamu ngapain aja ? kok bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu Kamu ngapain aja ? kok bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu Kamu ngapain aja ? kok bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu bisa sampai seperti itu',
  },
];

export default function Detail() {
  const forum: IForum = EXAMPLE_FORUMS;
  return (
    <div className="">
      <InvicibleNavbar />
      <div className="max-w-[80vw] p-3 rounded-md dark:border-orange-500 border-blue-500 border">
        {/* User */}
        <div className="flex ">
          <div className="center">
            <img
              className="w-20 h-20 rounded-full"
              src={forum.user.imageUrl}
              alt=""
            />
          </div>
          <div className="center">
            <div className="ml-2">
              <div className="ml-1 font-semibold">{forum.user.name}</div>
              <div className="text-sm">( {forum.user.role} )</div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        {/* Title & Description */}
        <div className="p-5">
          <div className="font-bold text-lg">{forum.title}</div>
          <div className="">{forum.description}</div>
        </div>
        {/* Forum Extras */}
        {/* <div className="flex justify-end">
        <p>Seen</p>
      </div> */}
        <hr className="my-2" />

        {/* Comments */}
        {EXAMPLE_COMMENTS.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
        {/* Create Comment */}
        <hr className="my-5" />
        <CreateComment />
      </div>
    </div>
  );
}
