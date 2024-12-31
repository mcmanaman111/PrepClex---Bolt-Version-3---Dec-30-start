import React from 'react';
import { ListFilter } from 'lucide-react';

interface QuestionType {
  id: string;
  label: string;
  count: number;
}

interface Props {
  questionTypes: QuestionType[];
  selectedQuestions: string[];
  onQuestionToggle: (id: string) => void;
  onSelectAll: () => void;
}

const QuestionSelection = ({ 
  questionTypes, 
  selectedQuestions, 
  onQuestionToggle, 
  onSelectAll 
}: Props) => {
  return (
    <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg p-6">
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex items-center gap-3">
            <ListFilter className="w-6 h-6 text-[#2B3467]" />
            <h3 className="text-xl font-semibold text-[#2B3467]">Select Question Type</h3>
          </div>
          <p className="text-sm text-gray-500">Choose which questions to include</p>
        </div>

        <div className="flex justify-end mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2B3467]">Select All</span>
            <input
              type="checkbox"
              checked={selectedQuestions.length === questionTypes.length}
              onChange={onSelectAll}
              className="w-5 h-5 rounded border-gray-300 text-[#2B3467] focus:ring-[#2B3467]"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questionTypes.map((type) => (
            <div
              key={type.id}
              className={`p-4 rounded-xl border-2 ${
                selectedQuestions.includes(type.id)
                  ? 'border-[#2B3467] bg-[#2B3467] bg-opacity-5'
                  : 'border-gray-200 hover:border-[#2B3467] hover:bg-opacity-5'
              }`}
            >
              <div 
                className="flex items-start justify-between cursor-pointer"
                onClick={() => onQuestionToggle(type.id)}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedQuestions.includes(type.id)}
                    onChange={() => onQuestionToggle(type.id)}
                    className="w-5 h-5 rounded border-gray-300 text-[#2B3467] focus:ring-[#2B3467]"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div>
                    <h4 className="font-medium text-[#2B3467]">{type.label}</h4>
                    <p className="text-sm text-gray-500">{type.count} questions</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSelection;