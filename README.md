# Task Manager - MERN Stack Application

A full-stack Task Manager application built with the MERN stack, featuring JWT authentication, real-time task management, dark mode, and a clean responsive UI.

## Live Demo

- **Frontend:** [Vercel Link - Coming Soon]
- **Backend:** [Render Link - Coming Soon]

## Features

- User Registration and Login with JWT Authentication
- Create, Edit, Delete Tasks
- Toggle Task Status (Pending / Completed)
- Filter Tasks by Status and Priority
- Real-time Stats Dashboard
- Dark Mode
- React Query for server state management
- Zustand for client state management
- Fully Responsive UI

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- State: Zustand, TanStack Query
- Backend: Node.js, Express.js
- Database: MongoDB Atlas, Mongoose
- Auth: JWT, bcryptjs
- Deploy: Vercel + Render

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/opu02/task-manager.git
cd task-manager

### 2. Backend Setup
cd server
npm install

Create .env file in /server folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
NODE_ENV=development

npm run dev

### 3. Frontend Setup
cd client
npm install
npm run dev

Open http://localhost:5173

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
- PATCH /api/tasks/:id/toggle

## Author
Jahidur Rahman Apu
GitHub: https://github.com/opu02
