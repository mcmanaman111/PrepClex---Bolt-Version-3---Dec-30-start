import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Category } from '../../data/types';

interface Props {
  category: Category;
  isSelected: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onExpand: () => void;
  onTopicToggle: (categoryId: string, topicId: string) => void;
  selectedTopics: string[];
}

const CategoryCard = ({
  category,
  isSelected,
  isExpanded,
  onToggle,
  onExpand,
  onTopicToggle,
  selectedTopics
}: Props) => {
  return (
    <div
      className={`p-4 rounded-xl border-2 transition-all ${
        isSelected
          ? 'border-[#2B3467] bg-[#2B3467] bg-opacity-5'
          : 'border-gray-200 hover:border-[#2B3467] hover:bg-opacity-5'
      }`}
    >
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onToggle}
            className="w-5 h-5 rounded border-gray-300 text-[#2B3467] focus:ring-[#2B3467]"
            onClick={(e) => e.stopPropagation()}
          />
          <div>
            <h4 className="font-medium text-[#2B3467]">{category.name}</h4>
            <p className="text-sm text-gray-500">
              {category.count} questions • {category.topicCount} topics
            </p>
          </div>
        </div>
        {category.topics && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="text-[#2B3467] hover:bg-[#2B3467] hover:bg-opacity-10 rounded-full p-1"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {isExpanded && category.topics && (
        <div className="mt-3 ml-8 space-y-2">
          {category.topics.map((topic) => (
            <div key={topic.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic.id)}
                  onChange={() => onTopicToggle(category.id, topic.id)}
                  className="w-4 h-4 rounded border-gray-300 text-[#2B3467] focus:ring-[#2B3467]"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {topic.name}
                </span>
              </div>
              <span className="text-sm text-gray-500">{topic.count} questions</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;