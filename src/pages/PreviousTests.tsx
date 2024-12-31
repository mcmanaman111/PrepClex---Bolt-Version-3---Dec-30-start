import React from 'react';
import { Calendar, Clock, Award } from 'lucide-react';

const PreviousTests = () => {
  const mockTests = [
    {
      id: 1,
      date: '2024-03-15',
      score: 85,
      questions: 75,
      time: 90,
      type: 'Practice Test'
    },
    {
      id: 2,
      date: '2024-03-14',
      score: 78,
      questions: 100,
      time: 120,
      type: 'Timed Test'
    },
    // Add more mock tests here
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Previous Tests</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">15</h3>
            <p className="text-gray-600">Tests Taken</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">82%</h3>
            <p className="text-gray-600">Average Score</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">95min</h3>
            <p className="text-gray-600">Average Time</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Test History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time (min)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockTests.map((test) => (
                  <tr key={test.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{test.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.questions}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        test.score >= 80 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {test.score}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousTests;