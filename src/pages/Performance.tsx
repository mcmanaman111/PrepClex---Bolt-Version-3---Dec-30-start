import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Performance = () => {
  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Average Score',
        data: [65, 72, 78, 85],
        borderColor: '#3B82F6',
        tension: 0.4,
      }
    ]
  };

  const topicData = {
    labels: [
      'Fundamentals',
      'Medical-Surgical',
      'Pediatric',
      'Maternal',
      'Psychiatric',
      'Pharmacology'
    ],
    datasets: [
      {
        label: 'Performance by Topic',
        data: [85, 72, 90, 68, 75, 82],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
          '#EC4899'
        ],
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Performance Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Progress Over Time</h3>
          <Line data={progressData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Performance by Topic</h3>
          <Bar data={topicData} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Strengths</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-green-600">
              <span className="w-4 h-4 bg-green-100 rounded-full mr-2"></span>
              Pediatric Nursing (90%)
            </li>
            <li className="flex items-center text-green-600">
              <span className="w-4 h-4 bg-green-100 rounded-full mr-2"></span>
              Fundamentals (85%)
            </li>
            <li className="flex items-center text-green-600">
              <span className="w-4 h-4 bg-green-100 rounded-full mr-2"></span>
              Pharmacology (82%)
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Areas for Improvement</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-red-600">
              <span className="w-4 h-4 bg-red-100 rounded-full mr-2"></span>
              Maternal (68%)
            </li>
            <li className="flex items-center text-red-600">
              <span className="w-4 h-4 bg-red-100 rounded-full mr-2"></span>
              Medical-Surgical (72%)
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-blue-600">
              <span className="w-4 h-4 bg-blue-100 rounded-full mr-2"></span>
              20% improvement in Pharmacology
            </li>
            <li className="flex items-center text-blue-600">
              <span className="w-4 h-4 bg-blue-100 rounded-full mr-2"></span>
              Completed 500 practice questions
            </li>
            <li className="flex items-center text-blue-600">
              <span className="w-4 h-4 bg-blue-100 rounded-full mr-2"></span>
              85% success rate this week
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Performance;