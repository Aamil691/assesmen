import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { BarChart3, TrendingUp, PieChart as PieChartIcon, Activity } from 'lucide-react';

interface ChartData {
  name: string;
  users: number;
  revenue: number;
  growth: number;
  marketShare: number;
}

const Chart: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'bar' | 'line' | 'pie' | 'area'>('bar');

  // Sample data for charts
  const chartData: ChartData[] = [
    { name: 'Jan', users: 1200, revenue: 45000, growth: 15, marketShare: 25 },
    { name: 'Feb', users: 1350, revenue: 52000, growth: 18, marketShare: 28 },
    { name: 'Mar', users: 1480, revenue: 58000, growth: 22, marketShare: 30 },
    { name: 'Apr', users: 1620, revenue: 65000, growth: 25, marketShare: 32 },
    { name: 'May', users: 1780, revenue: 72000, growth: 28, marketShare: 35 },
    { name: 'Jun', users: 1950, revenue: 80000, growth: 32, marketShare: 38 },
    { name: 'Jul', users: 2100, revenue: 88000, growth: 35, marketShare: 40 },
    { name: 'Aug', users: 2280, revenue: 95000, growth: 38, marketShare: 42 },
    { name: 'Sep', users: 2450, revenue: 102000, growth: 42, marketShare: 45 },
    { name: 'Oct', users: 2650, revenue: 110000, growth: 45, marketShare: 48 },
    { name: 'Nov', users: 2850, revenue: 118000, growth: 48, marketShare: 50 },
    { name: 'Dec', users: 3100, revenue: 125000, growth: 52, marketShare: 52 }
  ];

  const pieData = [
    { name: 'Active Users', value: 3100, color: '#10B981' },
    { name: 'Inactive Users', value: 800, color: '#EF4444' },
    { name: 'Pending Users', value: 200, color: '#F59E0B' }
  ];

  const chartTypes = [
    { id: 'bar', label: 'Bar Chart', icon: BarChart3, description: 'User growth over time' },
    { id: 'line', label: 'Line Chart', icon: TrendingUp, description: 'Revenue trends' },
    { id: 'pie', label: 'Pie Chart', icon: PieChartIcon, description: 'User status distribution' },
    { id: 'area', label: 'Area Chart', icon: Activity, description: 'Market share progression' }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [value.toLocaleString(), name === 'users' ? 'Users' : name]}
                labelStyle={{ color: '#374151' }}
              />
              <Legend />
              <Bar dataKey="users" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'revenue' ? `$${value.toLocaleString()}` : `${value}%`,
                  name === 'revenue' ? 'Revenue' : 'Growth Rate'
                ]}
                labelStyle={{ color: '#374151' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2, fill: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="growth" 
                stroke="#F59E0B" 
                strokeWidth={3}
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 2, fill: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [value.toLocaleString(), 'Users']}
                labelStyle={{ color: '#374151' }}
              />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`${value}%`, 'Market Share']}
                labelStyle={{ color: '#374151' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="marketShare" 
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.3}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  const getChartTitle = () => {
    switch (activeChart) {
      case 'bar':
        return 'User Growth Analytics';
      case 'line':
        return 'Revenue & Growth Trends';
      case 'pie':
        return 'User Status Distribution';
      case 'area':
        return 'Market Share Progression';
      default:
        return 'Chart Analytics';
    }
  };

  const getChartDescription = () => {
    switch (activeChart) {
      case 'bar':
        return 'Monthly user acquisition and growth patterns';
      case 'line':
        return 'Revenue performance and growth rate analysis';
      case 'pie':
        return 'Current distribution of user account statuses';
      case 'area':
        return 'Market share evolution over the past year';
      default:
        return 'Interactive data visualization';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Visualization Dashboard</h2>
        <p className="text-gray-600">Interactive charts and analytics for comprehensive data insights</p>
      </div>

      {/* Chart Type Selector */}
      <div className="card">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {chartTypes.map((chartType) => {
            const Icon = chartType.icon;
            return (
              <button
                key={chartType.id}
                onClick={() => setActiveChart(chartType.id as any)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  activeChart === chartType.id
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Icon className={`h-8 w-8 ${
                    activeChart === chartType.id ? 'text-primary-600' : 'text-gray-500'
                  }`} />
                  <div className="text-center">
                    <div className={`font-medium ${
                      activeChart === chartType.id ? 'text-primary-700' : 'text-gray-900'
                    }`}>
                      {chartType.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {chartType.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart Display */}
      <div className="card">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{getChartTitle()}</h3>
          <p className="text-gray-600">{getChartDescription()}</p>
        </div>
        
        <div className="w-full">
          {renderChart()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-2xl font-bold text-primary-600 mb-2">
            {chartData[chartData.length - 1].users.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Users</div>
        </div>
        
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">
            ${chartData[chartData.length - 1].revenue.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Monthly Revenue</div>
        </div>
        
        <div className="card text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-2">
            {chartData[chartData.length - 1].growth}%
          </div>
          <div className="text-sm text-gray-600">Growth Rate</div>
        </div>
        
        <div className="card text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">
            {chartData[chartData.length - 1].marketShare}%
          </div>
          <div className="text-sm text-gray-600">Market Share</div>
        </div>
      </div>

      {/* Data Summary */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">User Growth</h4>
            <p className="text-sm text-gray-600">
              The platform has shown consistent user growth with a {chartData[chartData.length - 1].growth}% 
              increase in the last month. Total user base has grown from {chartData[0].users.toLocaleString()} 
              to {chartData[chartData.length - 1].users.toLocaleString()} users.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Revenue Performance</h4>
            <p className="text-sm text-gray-600">
              Revenue has increased from ${chartData[0].revenue.toLocaleString()} to ${chartData[chartData.length - 1].revenue.toLocaleString()} 
              over the year, representing a strong upward trend in monetization.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Market Position</h4>
            <p className="text-sm text-gray-600">
              Market share has grown from {chartData[0].marketShare}% to {chartData[chartData.length - 1].marketShare}%, 
              indicating successful market penetration and competitive positioning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
