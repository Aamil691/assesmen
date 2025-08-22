# Assessment App - React TypeScript Application

A modern, responsive React application built with TypeScript and Tailwind CSS, featuring a comprehensive user interface with form validation, data tables, and interactive charts.

## 🚀 Features

### 1. **User Form Component**
- Comprehensive form with validation
- Real-time error handling
- Responsive design for all devices
- Form submission with success feedback
- Input fields for personal, contact, and address information

### 2. **Data Table Component**
- Sortable columns (click headers to sort)
- Advanced filtering by status
- Search functionality across multiple fields
- Pagination with configurable items per page
- Responsive table design
- Sample data with 10 user records

### 3. **Chart Component**
- Multiple chart types: Bar, Line, Pie, and Area charts
- Interactive chart switching
- Responsive chart containers
- Key metrics display
- Data summary and insights
- Built with Recharts library

### 4. **Modern UI/UX**
- Clean, professional design
- Responsive layout for all screen sizes
- Smooth transitions and hover effects
- Consistent color scheme and typography
- Icon integration with Lucide React

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 4.9.0
- **Styling**: Tailwind CSS 3.3.0
- **Charts**: Recharts 2.8.0
- **Icons**: Lucide React 0.294.0
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
assesment/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserForm.tsx      # Form component with validation
│   │   ├── DataTable.tsx     # Data table with sorting/filtering
│   │   └── Chart.tsx         # Chart visualization component
│   ├── App.tsx               # Main application component
│   ├── index.tsx             # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🎯 Component Details

### UserForm Component
- **Fields**: First Name, Last Name, Email, Phone, Address, City, State, ZIP Code
- **Validation**: Required fields, email format, phone format, ZIP code format
- **Features**: Real-time validation, error messages, success feedback
- **Responsive**: Adapts to mobile, tablet, and desktop screens

### DataTable Component
- **Data**: 10 sample user records with realistic information
- **Sorting**: Click any column header to sort (ascending/descending)
- **Filtering**: Filter by user status (Active, Inactive, Pending)
- **Search**: Search across name, email, and city fields
- **Pagination**: 5 items per page with navigation controls

### Chart Component
- **Chart Types**: 
  - Bar Chart: User growth over time
  - Line Chart: Revenue and growth trends
  - Pie Chart: User status distribution
  - Area Chart: Market share progression
- **Interactivity**: Switch between chart types, hover tooltips
- **Metrics**: Key performance indicators and data summaries

## 🎨 Design Features

- **Color Scheme**: Professional blue primary colors with gray accents
- **Typography**: Clear hierarchy with proper font weights and sizes
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows for depth and modern appearance
- **Transitions**: Smooth hover effects and state changes
- **Responsive**: Mobile-first design approach

## 📱 Responsive Design

The application is fully responsive and works on:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🔧 Customization

### Colors
Modify the primary color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize as needed
  }
}
```

### Styling
Custom styles can be added in `src/index.css` using Tailwind's `@layer` directive.

### Data
Sample data can be modified in the respective component files:
- UserForm: Update validation rules and field requirements
- DataTable: Modify sample data and table structure
- Chart: Update chart data and visualization options

## 📋 Requirements Met

✅ **React Application**: Built with React 18 and TypeScript  
✅ **Modern UI**: Clean, professional design with Tailwind CSS  
✅ **Form with Validation**: Comprehensive form with real-time validation  
✅ **Data Table**: Sortable, filterable table with pagination  
✅ **Chart Visualization**: Multiple chart types with Recharts  
✅ **Responsive Design**: Works on all device sizes  
✅ **TypeScript**: Full type safety throughout the application  
✅ **Professional Code**: Clean, well-structured, maintainable code  

## 🌟 Additional Features

- **Tab Navigation**: Easy switching between components
- **Loading States**: Form submission feedback
- **Error Handling**: Comprehensive validation and error display
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Performance**: Optimized with React hooks and memoization
- **Modern Icons**: Professional icon set with Lucide React

## 🎉 Getting Started

1. Install dependencies with `npm install`
2. Start development server with `npm start`
3. Navigate between tabs to explore different components
4. Test form validation and submission
5. Interact with the data table (sort, filter, search)
6. Switch between different chart types
7. Test responsive design on different screen sizes

The application is ready to use immediately with sample data and can be easily customized for production use.
