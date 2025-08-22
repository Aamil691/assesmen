import React, { useState } from 'react';
import { BarChart3, Users, FileText, Home } from 'lucide-react';
import UserForm from './components/UserForm';
import DataTable from './components/DataTable';
import Chart from './components/Chart';

type TabType = 'form' | 'table' | 'chart';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('form');

  const tabs = [
    { id: 'form', label: 'User Form', icon: FileText },
    { id: 'table', label: 'Data Table', icon: Users },
    { id: 'chart', label: 'Chart', icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'form':
        return <UserForm />;
      case 'table':
        return <DataTable />;
      case 'chart':
        return <Chart />;
      default:
        return <UserForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">Assessment App</h1>
            </div>
            <div className="text-sm text-gray-500">
              Built with React + TypeScript + Tailwind CSS
            </div>
          </div>
          <div className="text-sm text-gray-500 font-medium text-primary-600">
            Created by AAMIL RAIS
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
