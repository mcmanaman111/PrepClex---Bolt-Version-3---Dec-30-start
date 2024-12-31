import React, { useState } from 'react';
import { Clock, Flag, BookmarkPlus, Settings } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  choices: string[];
  type: 'single' | 'multiple';
}

const ExamPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState<string>('02:30:00');

  const mockQuestion: Question = {
    id: 17426544,
    text: "The nurse teaches a client about their newly applied halo fixator device with a vest. Which of the following statements should the nurse make? Select all that apply.",
    choices: [
      "You should ride a bicycle instead of driving a car.",
      "Report any fever or drainage at the pin sites.",
      "Always keep the wrench taped to the front of the vest.",
      "When you are getting out of bed, roll to the side and push on the mattress.",
      "Wear a cotton t-shirt under the vest to absorb any moisture."
    ],
    type: 'multiple'
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#2B547E] text-white py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">PREPCLEX</h1>
            <span className="text-sm">NCLEX® Exam Preparation</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-mono">{timeLeft}</span>
            </div>
            <div>
              <span>1 of 85</span>
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-[#5BB4E5] text-white py-2 px-4">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 hover:bg-blue-600 px-3 py-1 rounded">
            <BookmarkPlus className="w-4 h-4" />
            <span>MARK FOR LATER</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-blue-600 px-3 py-1 rounded">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-112px)]">
        {/* Question Section */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>QID: {mockQuestion.id}</span>
                <span className="font-mono">{timeLeft}</span>
              </div>
              <p className="text-lg mb-6">{mockQuestion.text}</p>
              <div className="space-y-3">
                {mockQuestion.choices.map((choice, index) => (
                  <label key={index} className="flex items-start space-x-3 p-3 rounded hover:bg-gray-50">
                    <input
                      type={mockQuestion.type === 'multiple' ? 'checkbox' : 'radio'}
                      name="answer"
                      className="mt-1"
                      onChange={() => {
                        const newAnswers = [...selectedAnswers];
                        if (newAnswers.includes(choice)) {
                          newAnswers.splice(newAnswers.indexOf(choice), 1);
                        } else {
                          newAnswers.push(choice);
                        }
                        setSelectedAnswers(newAnswers);
                      }}
                      checked={selectedAnswers.includes(choice)}
                    />
                    <span>{choice}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Can be used for explanations, notes, etc. */}
        <div className="w-96 bg-white border-l border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Explanation</h3>
          <p className="text-gray-600">
            Answer will be shown here after submission.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200 p-4">
        <div className="flex justify-between max-w-4xl mx-auto">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Previous
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ExamPage;