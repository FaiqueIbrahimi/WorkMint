# 🚀 WorkMint - Modern Job Portal Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue.svg" alt="React Version">
  <img src="https://img.shields.io/badge/Node.js-Latest-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-Latest-green.svg" alt="MongoDB">
  <img src="https://img.shields.io/badge/Express.js-5.1.0-lightgrey.svg" alt="Express.js">
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.8.2-purple.svg" alt="Redux Toolkit">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.11-blue.svg" alt="Tailwind CSS">
</div>

<div align="center">
  <h3>Your one-stop hub where talent meets opportunity, making job hunting and hiring smarter, faster, and more efficient.</h3>
</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔍 **Job Seekers**
- **User Registration & Authentication** - Secure JWT-based authentication with HTTP-only cookies
- **Profile Management** - Comprehensive profile creation with resume upload
- **Job Search & Filtering** - Advanced search with multiple filters and sorting options
- **Job Applications** - One-click job applications with application tracking
- **Application Status** - Real-time updates on application status
- **Save Jobs** - Bookmark interesting job opportunities
- **Responsive Design** - Seamless experience across all devices

### 🏢 **Recruiters & Companies**
- **Company Registration** - Complete company profile setup with logo upload
- **Job Posting** - Create detailed job postings with rich descriptions
- **Application Management** - View and manage job applications
- **Candidate Screening** - Review candidate profiles and resumes
- **Job Analytics** - Track job posting performance
- **Company Dashboard** - Comprehensive admin panel for job management

### 🎨 **Modern UI/UX**
- **Gradient Design Theme** - Beautiful purple-to-orange gradient design system
- **Smooth Animations** - Micro-interactions and hover effects
- **Dark Mode Support** - Toggle between light and dark themes
- **Mobile Responsive** - Optimized for all screen sizes
- **Accessibility** - WCAG compliant design elements

---

## 🛠 Tech Stack

### **Frontend**
- **React 19.1.0** - Latest React with modern features
- **Redux Toolkit** - State management with Redux Persist
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API requests
- **Vite** - Fast build tool and dev server

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud-based image storage
- **Cookie Parser** - HTTP cookie parsing
- **CORS** - Cross-Origin Resource Sharing

### **DevOps & Tools**
- **Nodemon** - Development server auto-restart
- **ESLint** - Code linting and formatting
- **Git** - Version control system

---

## 📁 Project Structure

```
WorkMint/
├── 📁 backend/
│   ├── 📄 index.js                 # Server entry point
│   ├── 📄 package.json            # Backend dependencies
│   ├── 📁 controllers/            # Business logic controllers
│   │   ├── 📄 application.controller.js
│   │   ├── 📄 company.controller.js
│   │   ├── 📄 job.controller.js
│   │   └── 📄 user.controller.js
│   ├── 📁 middlewares/            # Custom middlewares
│   │   ├── 📄 isAuthenticated.js
│   │   └── 📄 multer.js
│   ├── 📁 models/                # Database schemas
│   │   ├── 📄 application.model.js
│   │   ├── 📄 company.model.js
│   │   ├── 📄 job.model.js
│   │   └── 📄 user.model.js
│   ├── 📁 routes/                # API route definitions
│   │   ├── 📄 application.route.js
│   │   ├── 📄 company.route.js
│   │   ├── 📄 job.route.js
│   │   └── 📄 user.route.js
│   └── 📁 utils/                 # Utility functions
│       ├── 📄 cloudinary.js
│       ├── 📄 datauri.js
│       └── 📄 db.js
│
├── 📁 frontend/
│   ├── 📄 index.html              # HTML template
│   ├── 📄 package.json           # Frontend dependencies
│   ├── 📄 vite.config.js         # Vite configuration
│   ├── 📄 tailwind.config.js     # Tailwind CSS config
│   ├── 📁 src/
│   │   ├── 📄 App.jsx            # Main application component
│   │   ├── 📄 main.jsx           # Application entry point
│   │   ├── 📁 components/        # React components
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 Jobs.jsx
│   │   │   ├── 📄 Browse.jsx
│   │   │   ├── 📄 Profile.jsx
│   │   │   ├── 📁 auth/         # Authentication components
│   │   │   ├── 📁 admin/        # Admin/Company components
│   │   │   ├── 📁 shared/       # Shared components
│   │   │   └── 📁 ui/           # UI component library
│   │   ├── 📁 hooks/            # Custom React hooks
│   │   ├── 📁 redux/            # Redux store and slices
│   │   └── 📁 utils/            # Utility functions
│   └── 📁 public/               # Static assets
│
└── 📄 README.md                  # Project documentation
```

---

## 🚀 Installation

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### **Clone Repository**
```bash
git clone https://github.com/FaiqueIbrahimi/WorkMint.git
cd WorkMint
```

### **Backend Setup**
```bash
cd backend
npm install
```

### **Frontend Setup**
```bash
cd frontend
npm install
```

---

## 🔧 Environment Setup

Create `.env` files in both `backend` and `frontend` directories:

### **Backend (.env)**
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8000
CORS_ORIGIN=http://localhost:5173

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### **Frontend (.env)**
```env
VITE_API_URL=http://localhost:8000/api/v1
```

---

## 💻 Usage

### **Development Mode**

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on `http://localhost:8000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

3. **Access Application**
   - Open your browser and visit `http://localhost:5173`
   - Register as a job seeker or recruiter
   - Start exploring the platform!

### **Production Build**
```bash
# Build frontend for production
cd frontend
npm run build

# Start backend in production
cd backend
npm start
```

---

## 🔗 API Endpoints

### **Authentication**
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `POST /api/v1/user/logout` - User logout
- `POST /api/v1/user/profile/update` - Update user profile

### **Jobs**
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/getadminjobs` - Get admin jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `POST /api/v1/job/post` - Create new job
- `PUT /api/v1/job/update/:id` - Update job

### **Companies**
- `POST /api/v1/company/register` - Register company
- `GET /api/v1/company/get` - Get all companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `PUT /api/v1/company/update/:id` - Update company

### **Applications**
- `GET /api/v1/application/get` - Get user applications
- `GET /api/v1/application/:id/applicants` - Get job applicants
- `POST /api/v1/application/apply/:id` - Apply to job
- `POST /api/v1/application/status/:id/update` - Update application status

---

## 📸 Screenshots

### **Homepage**
![Homepage](https://via.placeholder.com/800x400/6A38C2/FFFFFF?text=WorkMint+Homepage)

### **Job Search**
![Job Search](https://via.placeholder.com/800x400/8B5CF6/FFFFFF?text=Job+Search+Page)

### **Company Dashboard**
![Company Dashboard](https://via.placeholder.com/800x400/F83002/FFFFFF?text=Company+Dashboard)

---

## 🚦 Features Roadmap

- [ ] **Email Notifications** - Job alerts and application updates
- [ ] **Chat System** - Direct messaging between recruiters and candidates
- [ ] **Video Interviews** - Integrated video calling for remote interviews
- [ ] **Skill Assessments** - Built-in coding challenges and skill tests
- [ ] **Analytics Dashboard** - Advanced metrics for companies and job seekers
- [ ] **Mobile App** - React Native mobile application
- [ ] **AI-Powered Matching** - Smart job recommendations using ML
- [ ] **Multi-language Support** - Internationalization support

---

## 🤝 Contributing

We welcome contributions to WorkMint! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow ESLint rules and maintain code quality
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation when needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Faique Ibrahimi**
- GitHub: [@FaiqueIbrahimi](https://github.com/FaiqueIbrahimi)
- LinkedIn: [Connect with me](https://linkedin.com/in/faique-ibrahimi)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the excellent database
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors who made this project possible

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful!</h3>
  <p>Made with ❤️ by Faique Ibrahimi</p>
</div>