import CreatePostButton from '../../components/create-post-button';
import ForumCardContainer from '../../components/forum-card-container';
import { IForum } from '../../types/forum';
import { IUser } from '../../types/user';

const EXAMPLE_USER: IUser = {
  email: 'tintin6892@gmail.com',
  name: 'tintin',
  role: 'Doctor',
  imageUrl: 'https://picsum.photos/200',
};

const EXAMPLE_FORUMS: IForum[] = [
  {
    comment: 20,
    description:
      'Selamat pagi Dok, mau tanya.saya sudah telat haid 6 hari. Saya test negatif. Dan tadi pagi saya keluar flek coklat. Apakah saya mau haid atau saya hamil dok? Mohon penjelasannya.terimakasih',
    title: 'Sakit Berdarah',
    user: EXAMPLE_USER,
    seen: 3000,
  },
  {
    comment: 20,
    description:
      'Selamat pagi Dok, mau tanya.saya sudah telat haid 6 hari. Saya test negatif. Dan tadi pagi saya keluar flek coklat. Apakah saya mau haid atau saya hamil dok? Mohon penjelasannya.terimakasih',
    title: 'Sakit Berdarah',
    user: EXAMPLE_USER,
    seen: 3000,
  },
  {
    comment: 20,
    description:
      'Selamat pagi Dok, mau tanya.saya sudah telat haid 6 hari. Saya test negatif. Dan tadi pagi saya keluar flek coklat. Apakah saya mau haid atau saya hamil dok? Mohon penjelasannya.terimakasih Selamat pagi Dok, mau tanya.saya sudah telat haid 6 hari. Saya test negatif. Dan tadi pagi saya keluar flek coklat. Apakah saya mau haid atau saya hamil dok? Mohon penjelasannya.terimakasih',
    title: 'Sakit Berdarah',
    user: EXAMPLE_USER,
    seen: 3000,
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="h-screen center">
        <div className="">
          <ForumCardContainer forums={EXAMPLE_FORUMS}></ForumCardContainer>
        </div>
        <CreatePostButton />
      </div>
    </div>
  );
}
