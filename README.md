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

## Clone Repository

```bash
git clone https://github.com/hamzaalikhan98/admin-panel.git
```

---

## Install Frontend Dependencies

```bash
npm install
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 🗄️ MongoDB Setup

```bash
mongodb://127.0.0.1:27017/fyp-auth
```

---

# ▶️ Run Frontend

```bash
npm start
```

Runs on:

```bash
http://localhost:3000
```

---

# ▶️ Run Backend

```bash
cd backend
npm run dev
```

Runs on:

```bash
http://localhost:5000
```

---

# 🔑 API Endpoints

## Register User

```http
POST /api/auth/register
```

## Login User

```http
POST /api/auth/login
```

## Protected Profile Route

```http
GET /api/protected/profile
```

---

# 🧪 API Testing

Tested successfully using Postman:
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

# 📸 Dashboards

- Admin Dashboard
- Student Dashboard
- Supervisor Dashboard

---

# 👨‍💻 Developers

- Muhammad Asad Afzal – FA24-BSET-028
- Muhammad Umer Shehzad – FA24-BSET-038
- Hamza Ali Khan – FA24-BSET-013

---

# 📚 Learning Outcomes

- MERN Stack Development
- Authentication Systems
- MongoDB Integration
- API Development
- JWT Security
- Role-Based Access Control

---

# ✅ Project Status

✔️ Task 1 Completed  
✔️ Task 2 Completed  
✔️ Authentication Module Completed  
✔️ MongoDB Integrated  
✔️ GitHub Repository Updated
