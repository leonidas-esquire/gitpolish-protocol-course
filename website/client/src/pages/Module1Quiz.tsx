import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'wouter';

const Module1Quiz = () => {
  // Sample questions for demonstration
  const questions = [
    {
      id: 1,
      question: 'What is Git?',
      options: ['Version control system', 'Database', 'Programming language', 'Web server'],
    },
    {
      id: 2,
      question: 'Which command is used to stage changes?',
      options: ['git commit', 'git add', 'git push', 'git clone'],
    },
  ];

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (qId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Module 1 Quiz</h1>
        {questions.map((q) => (
          <div key={q.id} className="mb-6">
            <p className="font-semibold mb-2">{q.question}</p>
            <ul className="space-y-2">
              {q.options.map((opt) => (
                <li key={opt}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleAnswer(q.id, opt)}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-8">
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default Module1Quiz;
