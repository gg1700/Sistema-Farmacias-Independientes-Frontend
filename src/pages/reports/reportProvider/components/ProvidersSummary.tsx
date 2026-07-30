import React from 'react';
import { ProvidersSummary as ISummary } from '../../../../types/provider.types';

interface ProvidersSummaryProps {
  summary: ISummary;
}

export const ProvidersSummary: React.FC<ProvidersSummaryProps> = ({ summary }) => {
  const cards = [
    { title: 'Total Providers', value: summary.totalProviders, color: 'bg-blue-100 text-blue-800', icon: '🏢' },
    { title: 'Active Providers', value: summary.activeProviders, color: 'bg-green-100 text-green-800', icon: '✅' },
    { title: 'Inactive Providers', value: summary.inactiveProviders, color: 'bg-red-100 text-red-800', icon: '❌' },
    { title: 'New This Month', value: summary.newThisMonth, color: 'bg-purple-100 text-purple-800', icon: '📊' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${card.color}`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};