import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import TestValidationModal from '../modals/TestValidationModal';

interface Props {
  userName: string;
  selectedQuestions: string[];
  selectedCategories: string[];
  questionCount: number;
  onBeginTest: () => void;
}

const MAX_QUESTIONS = 75;

const MotivationCard = ({ 
  userName, 
  selectedQuestions,
  selectedCategories,
  questionCount,
  onBeginTest 
}: Props) => {
  const [showValidationModal, setShowValidationModal] = useState(false);

  const getValidationErrors = () => {
    const errors: string[] = [];
    if (selectedQuestions.length === 0) {
      errors.push('Select at least one question type');
    }
    if (selectedCategories.length === 0) {
      errors.push('Select at least one category');
    }
    if (questionCount === 0) {
      errors.push('Enter the number of questions');
    }
    if (questionCount > MAX_QUESTIONS) {
      errors.push(`Maximum ${MAX_QUESTIONS} questions allowed`);
    }
    return errors;
  };

  const validationErrors = getValidationErrors();
  const isValid = validationErrors.length === 0;

  const handleBeginTest = () => {
    if (isValid) {
      onBeginTest();
    } else {
      setShowValidationModal(true);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#1a237e] to-[#0d47a1] rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center h-full">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white text-center">
            You Got This! 💪
          </h3>
          <p className="text-xl text-blue-200">
            Everyday you're making progress, {userName}. Believe in yourself.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleBeginTest}
            disabled={!isValid}
            className="w-full px-6 py-3 bg-white text-[#2B3467] rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            Begin Test
          </button>
          {!isValid && (
            <button
              onClick={() => setShowValidationModal(true)}
              className="p-2 text-white/60 hover:text-white transition-colors"
              title="View Requirements"
            >
              <HelpCircle className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <TestValidationModal 
        isOpen={showValidationModal}
        onClose={() => setShowValidationModal(false)}
        validationErrors={validationErrors}
      />
    </div>
  );
};

export default MotivationCard;