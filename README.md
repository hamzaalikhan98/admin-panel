# 🎓 FYP Management System – Admin Panel

A modern MERN Stack based FYP Management System developed for managing Final Year Project workflows between Admin, Supervisors, and Students.

---

# 🚀 Features

## 🔐 Authentication System
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control
- Password Hashing using bcryptjs

---

# 👥 User Roles

## 👨‍💼 Admin
- Access Admin Dashboard
- Manage Faculty
- Manage Supervisors
- View System Statistics

## 👨‍🏫 Supervisor
- Access Supervisor Dashboard
- View Assigned Students
- Review Project Requests
- Provide Feedback

## 👨‍🎓 Student
- Access Student Dashboard
- View Project Information
- Check Supervisor Details
- View Project Status

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Development |
| Node.js | Backend Runtime |
| Express.js | REST API Development |
| MongoDB | Database |
| JWT | Authentication |
| bcryptjs | Password Security |
| Axios | API Requests |
| React Router DOM | Routing |
| Postman | API Testing |

---

# 📂 Project Structure

```bash
admin-panel/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── App.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/asad-afzal9198/admin-panel.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 🗄️ MongoDB Setup

Make sure MongoDB Community Server is installed and running locally.

Connection used:

```bash
mongodb://127.0.0.1:27017/fyp-auth
```

---

# ▶️ Run Frontend

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# ▶️ Run Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 API Endpoints

## Register User

```http
POST /api/auth/register
```

---

## Login User

```http
POST /api/auth/login
```

---

## Protected Profile Route

```http
GET /api/protected/profile
```

Requires:
- JWT Bearer Token

---

# 📸 Screenshots

## 🔐 Login Page
- Secure authentication page

## 📝 Registration Page
- User registration with role selection

## 👨‍💼 Admin Dashboard
- Faculty & supervisor management panel

## 👨‍🎓 Student Dashboard
- Student information and project section

## 👨‍🏫 Supervisor Dashboard
- Assigned students and project requests

---

# 🧪 API Testing

All APIs were tested successfully using Postman:
- Register API
- Login API
- Protected Route API

---

# 🔒 Security Features

- JWT Authentication
- bcrypt Password Hashing
- Protected Routes
- Role-Based Authorization

---

# 📦 GitHub Repository

Repository Link:

https://github.com/asad-afzal9198/admin-panel

---

# 👨‍💻 Developers

- Muhammad Asad Afzal – FA24-BSET-028
- Muhammad Umer Shehzad – FA24-BSET-038
- Hamza Ali Khan – FA24-BSET-013

---

# 📚 Learning Outcomes

This project improved understanding of:
- MERN Stack Development
- Authentication Systems
- API Integration
- MongoDB Database Handling
- JWT Security
- Role-Based Access Control

---

# ✅ Project Status

✔️ Task 1 Completed  
✔️ Task 2 Completed  
✔️ Authentication Module Completed  
✔️ MongoDB Integrated  
✔️ GitHub Repository Updated

---
