import Forms from '../../components/form/forms';
import { IFormQuestion } from '../../types/form-question';

const EXAMPLE_QUESTIONS: IFormQuestion[] = [
  {
    question: 'Seberapa sering anda minum air putih ?',
    answer: [
      '7 Hari Sekali',
      '2 Hari Sekali',
      '1 Hari Sekali',
      '0 Hari Sekali',
    ],
  },
  {
    question: 'Seberapa sering anda minum air putih ?',
    answer: [
      '7 Hari Sekali',
      '2 Hari Sekali',
      '1 Hari Sekali',
      '0 Hari Sekali',
    ],
  },
];

export default function Diabetes() {
  return (
    <div>
      <Forms forms={EXAMPLE_QUESTIONS} />
    </div>
  );
}
