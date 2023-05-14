import Forms from '../../components/form/forms';
import { IFormQuestion } from '../../types/form-question';

const EXAMPLE_QUESTIONS: IFormQuestion[] = [
  {
    questionValue: 'high_bp',
    question: 'Apakah anda memiliki atau di diagnosa tekanan darah tinggi ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'high_chol',
    question: 'Apakah anda memiliki kolestrol ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'chol_check',
    question:
      'Apakah anda pernah melakukan pemeriksaan kolesterol dalam 5 tahun terakhir ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'bmi',
    question: 'Bagaimana kategori BMI Anda ?',
    answer: ['ex. 27'],
    answerValue: [],
  },
  {
    questionValue: 'smoker',
    question:
      'Apakah anda pernah setidaknya merokok 100 batang dalam seumur hidup anda ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'stroke',
    question: 'Apakah anda pernah mengalami stroke ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'heart_disease',
    question:
      'Apakah anda pernah mempunyai penyakit jantung koroner atau infark miokard ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'phys_activity',
    question:
      'Apakah anda melakukan aktivitas fisik selama 30 hari ini ? (Tidak termasuk dalam pekerjaan anda)',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'fruits',
    question: 'Apakah anda memakan buah minimal 1x dalam sehari ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'veggies',
    question: 'Apakah anda memakan sayur-sayuran minimal 1x dalam sehari ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'heavy_alc',
    question:
      'Apakah adalah seorang alholik berat ? (laki - laki dewasa >= 14 | perempuan dewasa >= 7)',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'health_insurance',
    question: 'Apakah anda mempunyai asuransi kesehatan ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'no_doc_bc_cost',
    question:
      'Apakah ada waktu dalam 12 bulan terakhir ketika Anda perlu ke dokter tetapi tidak bisa karena biaya ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'gen_health',
    question:
      'Berapakah anda mengatakan secara umum kesehatan anda dari skala (1 - 5) ?',
    answer: [
      '1 (Sangat Baik)',
      '2 (Baik)',
      '3 (Normal)',
      '4 (Kurang Baik)',
      '5 (Tidak Baik)',
    ],
    answerValue: [1, 2, 3, 4, 5],
  },
  {
    questionValue: 'mental_health',
    question:
      'Berapa hari Anda merasa memiliki masalah kesehatan mental dalam 30 hari terakhir? ?',
    answer: ['0 - 30'],
    answerValue: [],
  },
  {
    questionValue: 'phys_health',
    question:
      'Berapa hari Anda merasa memiliki masalah kesehatan fisik dalam 30 hari terakhir ?',
    answer: ['0 - 30'],
    answerValue: [],
  },
  {
    questionValue: 'diff_walk',
    question:
      'Apakah Anda mengalami kesulitan serius saat berjalan atau menaiki tangga ?',
    answer: ['Ya', 'Tidak'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'sex',
    question: 'Apakah Anda perempuan atau laki-laki ?',
    answer: ['Laki - Laki', 'Perempuan'],
    answerValue: [1, 0],
  },
  {
    questionValue: 'age_category',
    question: 'Berapa kategori usia anda ?',
    answer: [
      'Usia 18 - 24',
      'Usia 25 - 29',
      'Usia 30 - 34',
      'Usia 35 - 39',
      'Usia 40 - 44',
      'Usia 45 - 49',
      'Usia 50 - 54',
      'Usia 55 - 59',
      'Usia 60 - 64',
      'Usia 65 - 69',
      'Usia 70 - 74',
      'Usia 75 - 79',
      'Usia 80 - Lebih Tua',
    ],
    answerValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
];

export default function Diabetes() {
  return (
    <div>
      <Forms forms={EXAMPLE_QUESTIONS} />
    </div>
  );
}
