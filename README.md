# Task Manager — MERN Stack Application

A full-stack Task Manager application built with the MERN stack, featuring JWT authentication, real-time task management, dark mode, and a clean responsive UI.

## 🚀 Live Demo

- **Frontend:** https://task-manager-jet-eta.vercel.app
- **Backend:** https://task-manager-api-yqbn.onrender.com

## ✨ Features

- 🔐 User Registration and Login with JWT Authentication
- ✅ Create, Edit, Delete Tasks
- 🔄 Toggle Task Status (Pending / Completed)
- 🔍 Filter Tasks by Status and Priority
- 📊 Real-time Stats Dashboard
- 🌙 Dark Mode
- ⚡ React Query (TanStack Query) for server state management
- 🐻 Zustand for client state management
- 📱 Fully Responsive UI

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS |
| State Management | Zustand, TanStack Query |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcryptjs |
| Deployment | Vercel (Frontend), Render (Backend) |

## 📁 Project Structure

task-manager/
├── client/ # React Frontend
│ ├── src/
│ │ ├── api/ # Axios instance & API calls
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Login, Register, Dashboard
│ │ ├── store/ # Zustand stores
│ │ └── utils/ # Constants & helpers
│ └── ...
│
└── server/ # Express Backend
├── controllers/ # Route logic
├── middleware/ # Auth, error, validation
├── models/ # User & Task schemas
├── routes/ # API routes
└── utils/ # Token generation


## ⚙️ Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### 1. Clone the repository
```bash
git clone https://github.com/opu02/task-manager.git
cd task-manager
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create `.env` file inside `/server`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Create `.env` file inside `/client`:
```env
VITE_API_URL=http://localhost:5000/api
```

```bash
npm run dev
```

### 4. Open in browser

http://localhost:5173


## 🔗 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks (with filters) |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| PATCH | `/api/tasks/:id/toggle` | Toggle task status |

## 👨‍💻 Author

**Jahidur Rahman Apu**
- GitHub: [@opu02](https://github.com/opu02)
- Portfolio: [opu02.github.io/Portfolio](https://opu02.github.io/Portfolio/)
