import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastLogin: string;
}

const DataTable: React.FC = () => {
  // Sample data
  const sampleData: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      city: 'New York',
      state: 'NY',
      status: 'active',
      joinDate: '2023-01-15',
      lastLogin: '2024-01-20 10:30 AM'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 234-5678',
      city: 'Los Angeles',
      state: 'CA',
      status: 'active',
      joinDate: '2023-02-20',
      lastLogin: '2024-01-19 2:15 PM'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@example.com',
      phone: '(555) 345-6789',
      city: 'Chicago',
      state: 'IL',
      status: 'inactive',
      joinDate: '2023-03-10',
      lastLogin: '2024-01-15 9:45 AM'
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah.williams@example.com',
      phone: '(555) 456-7890',
      city: 'Houston',
      state: 'TX',
      status: 'pending',
      joinDate: '2024-01-10',
      lastLogin: '2024-01-18 11:20 AM'
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      email: 'david.brown@example.com',
      phone: '(555) 567-8901',
      city: 'Phoenix',
      state: 'AZ',
      status: 'active',
      joinDate: '2023-04-05',
      lastLogin: '2024-01-20 8:00 AM'
    },
    {
      id: 6,
      firstName: 'Lisa',
      lastName: 'Davis',
      email: 'lisa.davis@example.com',
      phone: '(555) 678-9012',
      city: 'Philadelphia',
      state: 'PA',
      status: 'active',
      joinDate: '2023-05-12',
      lastLogin: '2024-01-19 4:30 PM'
    },
    {
      id: 7,
      firstName: 'Robert',
      lastName: 'Miller',
      email: 'robert.miller@example.com',
      phone: '(555) 789-0123',
      city: 'San Antonio',
      state: 'TX',
      status: 'inactive',
      joinDate: '2023-06-18',
      lastLogin: '2024-01-14 1:15 PM'
    },
    {
      id: 8,
      firstName: 'Emily',
      lastName: 'Wilson',
      email: 'emily.wilson@example.com',
      phone: '(555) 890-1234',
      city: 'San Diego',
      state: 'CA',
      status: 'active',
      joinDate: '2023-07-22',
      lastLogin: '2024-01-20 3:45 PM'
    },
    {
      id: 9,
      firstName: 'Michael',
      lastName: 'Taylor',
      email: 'michael.taylor@example.com',
      phone: '(555) 901-2345',
      city: 'Dallas',
      state: 'TX',
      status: 'pending',
      joinDate: '2024-01-05',
      lastLogin: '2024-01-17 10:10 AM'
    },
    {
      id: 10,
      firstName: 'Amanda',
      lastName: 'Anderson',
      email: 'amanda.anderson@example.com',
      phone: '(555) 012-3456',
      city: 'San Jose',
      state: 'CA',
      status: 'active',
      joinDate: '2023-08-30',
      lastLogin: '2024-01-20 6:20 PM'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<keyof User>('firstName');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = sampleData.filter(user => {
      const matchesSearch = 
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });

    // Sort data
    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status as keyof typeof statusClasses]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const SortIcon = ({ field }: { field: keyof User }) => {
    if (sortField !== field) {
      return <div className="w-4 h-4" />;
    }
    return sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Data Table</h2>
          <p className="text-gray-600">Manage and view user information with advanced filtering and sorting</p>
        </div>
        <div className="text-sm text-gray-500">
          Total Records: {filteredAndSortedData.length}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-field"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  { key: 'firstName', label: 'Name' },
                  { key: 'email', label: 'Email' },
                  { key: 'phone', label: 'Phone' },
                  { key: 'city', label: 'Location' },
                  { key: 'status', label: 'Status' },
                  { key: 'joinDate', label: 'Join Date' },
                  { key: 'lastLogin', label: 'Last Login' }
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => handleSort(key as keyof User)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{label}</span>
                      <SortIcon field={key as keyof User} />
                    </div>
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-sm text-gray-500">ID: {user.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.city}, {user.state}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(user.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.lastLogin}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(endIndex, filteredAndSortedData.length)}</span> of{' '}
                  <span className="font-medium">{filteredAndSortedData.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        page === currentPage
                          ? 'z-10 bg-primary-50 border-primary-500 text-primary-600'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
