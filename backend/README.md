# Lead Management API

A RESTful API for managing leads built with Node.js, Express, and MongoDB.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm 

## Installation

1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/Mekdeskebede/lead-management-assessment.git
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set the following environment variables:

MONGODB_URI=your_mongodb_connection_string
PORT=3001

4. ## Running the Application

### Development Mode
To run the application in development mode with hot-reload:
    ```bash
    npm run dev
    ```

### Production Mode
To start the application in production mode:
    ```bash
    npm start
    ```

## API Endpoints

### Get All Leads

GET /api/leads

### Add a New Lead

POST /api/leads



