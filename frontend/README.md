# Lead Management Frontend

A modern React application built with Next.js, Redux Toolkit Query, and Tailwind CSS for managing leads.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository and navigate to the frontend directory:
```bash
git clone https://github.com/Mekdeskebede/lead-management-assessment.git
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
To run the application in development mode with hot-reload:
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Mode
Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Features

- View all leads in a responsive table
- Add new leads with form validation
- Real-time updates using RTK Query
- Modern dark theme UI
- Responsive design for all screen sizes
- Status indicators with color coding

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.js
│   │   ├── add/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   └── globals.css
│   ├── components/
│   │   ├── LeadForm.js
│   │   ├── LeadList.js
│   │   ├── Navigation.js
│   │   └── Providers.js
│   ├── services/
│   │   └── leadApi.js
│   └── store/
│       └── store.js
├── .env.local
├── package.json
└── README.md
```

## Technology Stack

- **Framework**: Next.js 14
- **State Management**: Redux Toolkit with RTK Query
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono
- **HTTP Client**: Built-in RTK Query fetch

## Components

### LeadList
- Displays all leads in a responsive table
- Color-coded status indicators
- Loading and error states

### LeadForm
- Form for adding new leads
- Input validation
- Loading state during submission
- Success/error handling

### Navigation
- Responsive navigation bar
- Active route indication
- Modern dark theme design

## API Integration

The application uses RTK Query for API calls with the following endpoints:

```javascript
GET /leads    // Fetch all leads
POST /leads   // Create a new lead
```

## Development

To contribute to this project:

1. Create a new branch for your feature
2. Make your changes
3. Test your changes
4. Submit a pull request

## Dependencies

- next: React framework
- @reduxjs/toolkit: State management
- react-redux: React bindings for Redux
- tailwindcss: Utility-first CSS framework
- @tailwindcss/forms: Form styling utilities

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

## License

ISC
