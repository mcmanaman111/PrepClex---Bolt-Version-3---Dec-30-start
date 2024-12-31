import React from 'react';
import { Brain, Clock, Sparkles } from 'lucide-react';
import Toggle from '../ui/Toggle';

interface TestSettingsProps {
  tutorMode: boolean;
  timer: boolean;
  ngn: boolean;
  onTutorModeChange: (value: boolean) => void;
  onTimerChange: (value: boolean) => void;
  onNGNChange: (value: boolean) => void;
}

const TestSettings = ({
  tutorMode,
  timer,
  ngn,
  onTutorModeChange,
  onTimerChange,
  onNGNChange
}: TestSettingsProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tutor Mode</h3>
          </div>
          <Toggle
            label="Get detailed explanations after each question"
            value={tutorMode}
            onChange={onTutorModeChange}
            darkText={false}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Timer</h3>
          </div>
          <Toggle
            label="Set time limits for each question"
            value={timer}
            onChange={onTimerChange}
            darkText={false}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">NGN Questions</h3>
          </div>
          <Toggle
            label="Include Next Generation NCLEX style questions"
            value={ngn}
            onChange={onNGNChange}
            darkText={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TestSettings;