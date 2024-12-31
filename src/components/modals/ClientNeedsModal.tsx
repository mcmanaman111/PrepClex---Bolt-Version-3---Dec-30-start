import React from 'react';
import { X, ShieldCheck, Heart, Brain, Activity, Stethoscope, Pill, AlertTriangle, Workflow } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ClientNeedsModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const clientNeedsInfo = [
    {
      title: 'Management of Care',
      icon: ShieldCheck,
      description: 'Focuses on coordination of care, safety, legal rights, and ethical practice.'
    },
    {
      title: 'Safety and Infection Control',
      icon: AlertTriangle,
      description: 'Covers prevention of injury, emergency response, and infection prevention.'
    },
    {
      title: 'Health Promotion and Maintenance',
      icon: Heart,
      description: 'Addresses prevention, early detection, and lifestyle choices.'
    },
    {
      title: 'Psychosocial Integrity',
      icon: Brain,
      description: 'Deals with mental health, coping, and cultural aspects of care.'
    },
    {
      title: 'Basic Care and Comfort',
      icon: Activity,
      description: 'Covers activities of daily living, nutrition, and rest.'
    },
    {
      title: 'Pharmacological Therapies',
      icon: Pill,
      description: 'Focuses on medication administration and pain management.'
    },
    {
      title: 'Reduction of Risk Potential',
      icon: Stethoscope,
      description: 'Addresses complications and health alterations.'
    },
    {
      title: 'Physiological Adaptation',
      icon: Workflow,
      description: 'Covers care for acute, chronic, and life-threatening conditions.'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Understanding NCLEX Client Needs
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The NCLEX test plan is organized by Client Needs categories. These categories reflect the core areas of nursing practice and form the framework for nursing education and examination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientNeedsInfo.map((need, index) => (
              <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg">
                    <need.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {need.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {need.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientNeedsModal;