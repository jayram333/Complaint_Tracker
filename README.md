# Complaint Tracker System

A modern web-based Complaint Tracker System that enables users to submit complaints online and allows administrators to manage, update, and resolve them efficiently. The project is built using **HTML, CSS, Bootstrap, JavaScript, and Supabase**.

---

## 📌 Project Overview

The Complaint Tracker System provides two separate portals:

- **Sender Portal (User)** – Register, login, submit complaints, track complaint status, view complaint history, and update profile.
- **Receiver Portal (Admin)** – Login, view all complaints, update complaint status, add remarks, and manage complaints through a dashboard.

This project uses **Supabase** as the backend database and **Bootstrap 5** for a responsive user interface.

---

## 🚀 Features

### 👤 Sender Portal

- User Registration
- User Login
- Dashboard
- Submit Complaint
- Upload Complaint Image
- Complaint History
- Track Complaint Status
- View Complaint Timeline
- Update Profile
- Complaint Statistics

### 🛠️ Receiver Portal (Admin)

- Admin Login
- Dashboard
- View All Complaints
- Search Complaints
- Filter Complaints
- Update Complaint Status
- Add Admin Remarks
- Complaint Timeline
- Dashboard Statistics

---

## 💻 Technologies Used

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)

### Backend

- Supabase

### Database

- PostgreSQL (Supabase)

---

## 📂 Project Structure

```text
Complaint-Tracker/
│
├── index.html
├── register.html
├── login.html
├── sender-dashboard.html
├── submit-complaint.html
├── complaint-history.html
├── track-complaint.html
├── profile.html
│
├── admin-login.html
├── admin-dashboard.html
├── view-complaints.html
├── complaint-details.html
│
├── css/
│   └── style.css
│
├── js/
│   └── supabase.js
│
└── README.md
```

---

## 🗄️ Database Tables

### users

| Column | Type |
|----------|------|
| id | UUID |
| name | TEXT |
| email | TEXT |
| mobile | TEXT |
| address | TEXT |
| password | TEXT |
| last_login | TIMESTAMP |

---

### complaints

| Column | Type |
|----------|------|
| id | TEXT |
| name | TEXT |
| email | TEXT |
| mobile | TEXT |
| title | TEXT |
| category | TEXT |
| priority | TEXT |
| description | TEXT |
| location | TEXT |
| image | TEXT |
| status | TEXT |
| remarks | TEXT |
| timeline | JSONB |
| created_at | TIMESTAMP |

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/Complaint-Tracker.git
```

2. Open the project in Visual Studio Code.

3. Create a Supabase project.

4. Create the following tables:

- users
- complaints

5. Open **js/supabase.js**

Replace with your own credentials:

```javascript
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);
```

6. Run the project using **Live Server**.

---

## 👨‍💻 Demo Admin Login

Username

```
admin
```

Password

```
admin123
```

---

## 📋 Complaint Workflow

### Sender

Register

↓

Login

↓

Submit Complaint

↓

Track Complaint

↓

Complaint History

↓

Profile

---

### Receiver

Admin Login

↓

Dashboard

↓

Manage Complaints

↓

Update Status

↓

Add Remarks

↓

Complaint Resolved

---

## 📊 Complaint Status

- Submitted
- Under Review
- Assigned
- In Progress
- Resolved
- Rejected

---

## 🔮 Future Enhancements

- Email Notifications
- OTP Authentication
- Supabase Storage for Images
- File Upload Progress
- Analytics Dashboard
- Complaint Categories Chart
- Dark Mode
- Role-Based Authentication
- Mobile App Integration

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Sender Dashboard
- Admin Dashboard
- Complaint History
- Complaint Details

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push the branch.
5. Create a Pull Request.

---

## 📄 License

This project is developed for educational and academic purposes.

---

## 👤 Author

**PULAKALA JAY RAM**

FRONTEND DEVELOPER | BACKEND LEARNER |

GITHUB:-# Complaint Tracker System

A modern web-based Complaint Tracker System that enables users to submit complaints online and allows administrators to manage, update, and resolve them efficiently. The project is built using **HTML, CSS, Bootstrap, JavaScript, and Supabase**.

---

## 📌 Project Overview

The Complaint Tracker System provides two separate portals:

- **Sender Portal (User)** – Register, login, submit complaints, track complaint status, view complaint history, and update profile.
- **Receiver Portal (Admin)** – Login, view all complaints, update complaint status, add remarks, and manage complaints through a dashboard.

This project uses **Supabase** as the backend database and **Bootstrap 5** for a responsive user interface.

---

## 🚀 Features

### 👤 Sender Portal

- User Registration
- User Login
- Dashboard
- Submit Complaint
- Upload Complaint Image
- Complaint History
- Track Complaint Status
- View Complaint Timeline
- Update Profile
- Complaint Statistics

### 🛠️ Receiver Portal (Admin)

- Admin Login
- Dashboard
- View All Complaints
- Search Complaints
- Filter Complaints
- Update Complaint Status
- Add Admin Remarks
- Complaint Timeline
- Dashboard Statistics

---

## 💻 Technologies Used

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)

### Backend

- Supabase

### Database

- PostgreSQL (Supabase)

---

## 📂 Project Structure

```text
Complaint-Tracker/
│
├── index.html
├── register.html
├── login.html
├── sender-dashboard.html
├── submit-complaint.html
├── complaint-history.html
├── track-complaint.html
├── profile.html
│
├── admin-login.html
├── admin-dashboard.html
├── view-complaints.html
├── complaint-details.html
│
├── css/
│   └── style.css
│
├── js/
│   └── supabase.js
│
└── README.md
```

---

## 🗄️ Database Tables

### users

| Column | Type |
|----------|------|
| id | UUID |
| name | TEXT |
| email | TEXT |
| mobile | TEXT |
| address | TEXT |
| password | TEXT |
| last_login | TIMESTAMP |

---

### complaints

| Column | Type |
|----------|------|
| id | TEXT |
| name | TEXT |
| email | TEXT |
| mobile | TEXT |
| title | TEXT |
| category | TEXT |
| priority | TEXT |
| description | TEXT |
| location | TEXT |
| image | TEXT |
| status | TEXT |
| remarks | TEXT |
| timeline | JSONB |
| created_at | TIMESTAMP |

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/jayram333/Complaint-Tracker.git
```

2. Open the project in Visual Studio Code.

3. Create a Supabase project.

4. Create the following tables:

- users
- complaints

5. Open **js/supabase.js**

Replace with your own credentials:

```javascript
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);
```

6. Run the project using **Live Server**.

---

## 👨‍💻 Demo Admin Login

Username

```
admin
```

Password

```
admin123
```

---

## 📋 Complaint Workflow

### Sender

Register

↓

Login

↓

Submit Complaint

↓

Track Complaint

↓

Complaint History

↓

Profile

---

### Receiver

Admin Login

↓

Dashboard

↓

Manage Complaints

↓

Update Status

↓

Add Remarks

↓

Complaint Resolved

---

## 📊 Complaint Status

- Submitted
- Under Review
- Assigned
- In Progress
- Resolved
- Rejected

---

## 🔮 Future Enhancements

- Email Notifications
- OTP Authentication
- Supabase Storage for Images
- File Upload Progress
- Analytics Dashboard
- Complaint Categories Chart
- Dark Mode
- Role-Based Authentication
- Mobile App Integration

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Sender Dashboard
- Admin Dashboard
- Complaint History
- Complaint Details

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push the branch.
5. Create a Pull Request.

---

## 📄 License

This project is developed for educational and academic purposes.

---

## 👤 Author

**JAY RAM**

B.Tech – Information Technology | Frontend Developer | Backend Learner | Github:- https://github.com/jayram333
--
---

⭐ If you like this project, don't forget to **Star** the repository.