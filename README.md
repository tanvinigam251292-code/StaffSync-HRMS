# StaffSync – HR Management System

StaffSync is a web-based Human Resource Management System (HRMS) developed using the MERN stack. It helps organizations manage employee information and simplify HR activities through a role-based platform.

## Features

### 1. HR Dashboard
- Add, view, update, and manage employee records.
- Monitor employee attendance.
- Review, approve, or reject leave applications.
- Post announcements.

### 2. Manager Dashboard
- Review and manage leave applications.
- Create and manage training programs.
- Post announcements.

### 3. Employee Dashboard
- Mark attendance through check-in and check-out.
- Apply for leave and check leave status.
- View and update personal profile information.
- View announcements and training information.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JSON Web Token (JWT) |
| Password Security | bcryptjs |
| API Requests | Axios |
| Routing | React Router |

## Project Structure

```text
StaffSync/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js
- npm
- MongoDB database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/tanvinigam251292-code/StaffSync-HRMS.git
cd StaffSync-HRMS
```

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend folder and configure the required environment variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

Start the backend:

```bash
npm start
```

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal (usually http://localhost:5173).

## Application Architecture

StaffSync follows a three-tier architecture:

1. **Presentation Layer:** React-based user interface.
2. **Application Layer:** Node.js and Express.js handle business logic and API requests.
3. **Database Layer:** MongoDB stores application data.

The backend uses an MVC-style structure with models, controllers, and routes.

## Future Enhancements
- Forgot password and secure password recovery.
- Email notifications for leave approvals and announcements.
- Advanced HR analytics and reporting.
- Improved employee performance tracking.

## Project Information

- **Project Name:** StaffSync – HR Management System
- **Project Type:** Individual Project
- **Architecture:** MERN Stack
- **Version:** 1.0.0

## Author

Developed as an academic project.
