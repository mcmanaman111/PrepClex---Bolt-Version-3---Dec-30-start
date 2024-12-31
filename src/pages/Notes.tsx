import React from 'react';
import { FileText, Plus, Search } from 'lucide-react';

const Notes = () => {
  const mockNotes = [
    {
      id: 1,
      title: 'Cardiac Medications Review',
      category: 'Pharmacology',
      date: '2024-03-15',
      content: 'Beta blockers: Metoprolol, Atenolol...'
    },
    {
      id: 2,
      title: 'Pediatric Growth & Development',
      category: 'Pediatrics',
      date: '2024-03-14',
      content: 'Key milestones by age...'
    },
    // Add more mock notes
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Study Notes</h2>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          New Note
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search notes..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
                <select className="border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Categories</option>
                  <option>Pharmacology</option>
                  <option>Medical-Surgical</option>
                  <option>Pediatrics</option>
                  <option>Maternal</option>
                  <option>Psychiatric</option>
                </select>
              </div>

              <div className="space-y-4">
                {mockNotes.map((note) => (
                  <div key={note.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                        <p className="text-sm text-gray-500">{note.category} • {note.date}</p>
                      </div>
                      <div className="space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </div>
                    </div>
                    <p className="text-gray-600">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center text-gray-600">
                <span>Pharmacology</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">12</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <span>Medical-Surgical</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">8</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <span>Pediatrics</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">5</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use tags to organize notes</li>
              <li>• Review notes regularly</li>
              <li>• Share notes with study groups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;