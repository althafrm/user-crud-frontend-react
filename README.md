# User CRUD Frontend - React

This is a React-based frontend application for managing users with CRUD (Create, Read, Update, Delete) operations. The app interacts with a backend server built using Node.js and MongoDB Atlas.

## Prerequisites
Before following the setup instructions locally, make sure you have the following:

- Node.js (v14.0.0 or higher)
- Git

## Setup Instructions

Follow these steps to set up the frontend application for local testing.

### 1. Clone the Repository
```bash
git clone https://github.com/althafrm/user-crud-frontend-react.git
```

### 2. Navigate into the Project Directory
```bash
cd user-crud-frontend-react
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following line:

```bash
REACT_APP_API_BASE_URL=http://localhost:3001/api
```

This points to the backend API URL, which you should ensure is running locally on port `3001`.

### 5. Start the Application
```bash
npm start
```

The app will start at [http://localhost:3000](http://localhost:3000).
