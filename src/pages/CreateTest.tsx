import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestSettings from '../components/create-test/TestSettings';
import QuestionSelection from '../components/create-test/QuestionSelection';
import CategorySelection from '../components/create-test/CategorySelection';
import QuestionCountSelector from '../components/create-test/QuestionCountSelector';
import MotivationCard from '../components/create-test/MotivationCard';
import QuickStartCard from '../components/create-test/QuickStartCard';
import { questionTypes } from '../data/testData';
import { clientNeeds } from '../data/clientNeeds';
import type { TestConfig } from '../data/types';

const CreateTest = () => {
  const navigate = useNavigate();
  const [tutorMode, setTutorMode] = useState(true);
  const [timer, setTimer] = useState(false);
  const [ngn, setNGN] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(25);

  // Calculate total available questions based on selected categories and topics
  const totalSelectedQuestions = clientNeeds.reduce((acc, category) => {
    if (selectedCategories.includes(category.id)) {
      return acc + category.count;
    }
    
    // If category not selected but has topics, sum questions from selected topics
    if (category.topics) {
      const selectedTopicsInCategory = category.topics.filter(topic => 
        selectedTopics.includes(topic.id)
      );
      return acc + selectedTopicsInCategory.reduce((sum, topic) => sum + topic.count, 0);
    }
    
    return acc;
  }, 0);

  // Effect to handle category-topic relationship
  useEffect(() => {
    const newSelectedTopics = [...selectedTopics];

    clientNeeds.forEach(category => {
      if (category.topics) {
        const topicIds = category.topics.map(topic => topic.id);
        if (selectedCategories.includes(category.id)) {
          // Add all topics from selected category if not already selected
          topicIds.forEach(topicId => {
            if (!newSelectedTopics.includes(topicId)) {
              newSelectedTopics.push(topicId);
            }
          });
        } else {
          // Remove all topics from unselected category
          topicIds.forEach(topicId => {
            const index = newSelectedTopics.indexOf(topicId);
            if (index > -1) {
              newSelectedTopics.splice(index, 1);
            }
          });
        }
      }
    });

    setSelectedTopics(newSelectedTopics);
  }, [selectedCategories]);

  const handleQuickStart = () => {
    const settings: TestConfig = {
      tutorMode,
      timer,
      ngn,
      questionCount: 25 // Default quick start question count
    };

    navigate('/exam', { 
      state: { 
        isQuickStart: true,
        settings
      } 
    });
  };

  const handleQuestionToggle = (id: string) => {
    setSelectedQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) ? prev.filter(c => c !== categoryId) : [...prev, categoryId]
    );
  };

  const handleTopicToggle = (categoryId: string, topicId: string) => {
    setSelectedTopics(prev => {
      const newTopics = prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId];

      // Check if all topics in the category are selected
      const category = clientNeeds.find(c => c.id === categoryId);
      if (category?.topics) {
        const categoryTopicIds = category.topics.map(t => t.id);
        const allTopicsSelected = categoryTopicIds.every(id => newTopics.includes(id));
        
        // Update category selection based on topics
        if (allTopicsSelected && !selectedCategories.includes(categoryId)) {
          setSelectedCategories(prev => [...prev, categoryId]);
        } else if (!allTopicsSelected && selectedCategories.includes(categoryId)) {
          setSelectedCategories(prev => prev.filter(id => id !== categoryId));
        }
      }

      return newTopics;
    });
  };

  const handleSelectAllQuestions = () => {
    setSelectedQuestions(prev => 
      prev.length === questionTypes.length ? [] : questionTypes.map(q => q.id)
    );
  };

  const handleSelectAllCategories = () => {
    setSelectedCategories(prev => 
      prev.length === clientNeeds.length ? [] : clientNeeds.map(c => c.id)
    );
  };

  const handleBeginTest = () => {
    const settings: TestConfig = {
      tutorMode,
      timer,
      ngn,
      questionCount
    };

    navigate('/exam', { 
      state: { 
        settings,
        selectedQuestions,
        selectedCategories,
        selectedTopics
      } 
    });
  };

  return (
    <div className="p-8 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Hey Sara, let's create your practice test! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Choose to start right away with our Quick Start option, or customize your test by selecting specific question types and topics below.
          </p>
        </div>
        <QuickStartCard onStart={handleQuickStart} />
      </div>

      <div className="space-y-6">
        <TestSettings
          tutorMode={tutorMode}
          timer={timer}
          ngn={ngn}
          onTutorModeChange={setTutorMode}
          onTimerChange={setTimer}
          onNGNChange={setNGN}
        />

        <QuestionSelection
          questionTypes={questionTypes}
          selectedQuestions={selectedQuestions}
          onQuestionToggle={handleQuestionToggle}
          onSelectAll={handleSelectAllQuestions}
        />

        <CategorySelection
          categories={clientNeeds}
          selectedCategories={selectedCategories}
          selectedTopics={selectedTopics}
          onCategoryToggle={handleCategoryToggle}
          onTopicToggle={handleTopicToggle}
          onSelectAll={handleSelectAllCategories}
        />

        <div className="grid grid-cols-2 gap-6">
          <QuestionCountSelector
            availableQuestions={1211}
            value={questionCount}
            onChange={setQuestionCount}
            totalSelectedQuestions={totalSelectedQuestions}
          />
          <MotivationCard 
            userName="Sara"
            selectedQuestions={selectedQuestions}
            selectedCategories={selectedCategories}
            questionCount={questionCount}
            onBeginTest={handleBeginTest}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTest;