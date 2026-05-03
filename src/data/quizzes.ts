export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
};

export type Quiz = {
  id: string;
  title: string;
  subtitle: string;
  category: string;

  // Keeping this key same to avoid UI/logic break.
  // This means learning points now, not rewards/cash.
  reward: number;

  timeLimit: number;
  attemptsPerDay: number;
  questions: QuizQuestion[];
};

export const quizzes: Quiz[] = [
  {
    id: 'gk-basic',
    title: 'General Knowledge Quiz',
    subtitle: 'Test your basic GK and improve your knowledge',
    category: 'GK',
    reward: 100,
    timeLimit: 5 * 60,
    attemptsPerDay: 2,
    questions: [
      {
        id: 'q1',
        question: 'What is the capital of India?',
        options: [
          { id: 'a', text: 'Hyderabad' },
          { id: 'b', text: 'New Delhi' },
          { id: 'c', text: 'Mumbai' },
          { id: 'd', text: 'Chennai' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'q2',
        question: 'Which planet is known as the Red Planet?',
        options: [
          { id: 'a', text: 'Earth' },
          { id: 'b', text: 'Venus' },
          { id: 'c', text: 'Mars' },
          { id: 'd', text: 'Jupiter' },
        ],
        correctOptionId: 'c',
      },
      {
        id: 'q3',
        question: 'How many days are there in a leap year?',
        options: [
          { id: 'a', text: '365' },
          { id: 'b', text: '366' },
          { id: 'c', text: '364' },
          { id: 'd', text: '360' },
        ],
        correctOptionId: 'b',
      },
    ],
  },
  {
    id: 'science-basic',
    title: 'Science Quiz',
    subtitle: 'Simple science questions for quick practice',
    category: 'Science',
    reward: 100,
    timeLimit: 5 * 60,
    attemptsPerDay: 2,
    questions: [
      {
        id: 'q1',
        question: 'What gas do plants absorb from the atmosphere?',
        options: [
          { id: 'a', text: 'Oxygen' },
          { id: 'b', text: 'Carbon Dioxide' },
          { id: 'c', text: 'Nitrogen' },
          { id: 'd', text: 'Hydrogen' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'q2',
        question: 'What is H2O commonly known as?',
        options: [
          { id: 'a', text: 'Salt' },
          { id: 'b', text: 'Water' },
          { id: 'c', text: 'Oxygen' },
          { id: 'd', text: 'Sugar' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'q3',
        question: 'Which organ pumps blood in the human body?',
        options: [
          { id: 'a', text: 'Brain' },
          { id: 'b', text: 'Lungs' },
          { id: 'c', text: 'Heart' },
          { id: 'd', text: 'Kidney' },
        ],
        correctOptionId: 'c',
      },
    ],
  },
  {
    id: 'india-basic',
    title: 'India Quiz',
    subtitle: 'Questions about India, states and culture',
    category: 'India',
    reward: 100,
    timeLimit: 5 * 60,
    attemptsPerDay: 2,
    questions: [
      {
        id: 'q1',
        question: 'Which is the national animal of India?',
        options: [
          { id: 'a', text: 'Lion' },
          { id: 'b', text: 'Tiger' },
          { id: 'c', text: 'Elephant' },
          { id: 'd', text: 'Peacock' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'q2',
        question: 'Which is the national bird of India?',
        options: [
          { id: 'a', text: 'Parrot' },
          { id: 'b', text: 'Eagle' },
          { id: 'c', text: 'Peacock' },
          { id: 'd', text: 'Crow' },
        ],
        correctOptionId: 'c',
      },
      {
        id: 'q3',
        question: 'How many colors are there in the Indian national flag?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '4' },
          { id: 'd', text: '5' },
        ],
        correctOptionId: 'b',
      },
    ],
  },
];

export function getQuizById(quizId: string) {
  return quizzes.find((quiz) => quiz.id === quizId);
}
