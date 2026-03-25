#  Auth API + Groq AI Backend

A robust and scalable backend API built with **Node.js** and **Express.js**, featuring secure user authentication and AI-powered email generation using the Groq API.

---

## 🌐 Live API

* https://ai-email-auth-api.onrender.com

---

## Example API Usage

# Register
* POST https://ai-email-auth-api.onrender.com/api/auth/register

# Login
* POST https://ai-email-auth-api.onrender.com/api/auth/login

# Logout
* POST https://ai-email-auth-api.onrender.com/api/auth/logout

# get-user
* Get https://ai-email-auth-api.onrender.com/api/auth/get-me

##  Features

*  Secure User Authentication (Register, Login, Logout)
*  JWT-based Authorization & Protected Routes
*  AI Email Generator (powered by Groq API)
*  High Performance & Scalable Architecture
*  Clean & Maintainable RESTful API Structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token), bcrypt
* **AI Integration:** Groq API

---

## 📂 Project Structure

```
Backend/
│
├── src/
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & custom middleware
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   ├── config/        # Configuration files
│   ├── api/           # External API integration (Groq)
│   ├── app.js         # Express app setup
│
├── .env               # Environment variables
├── server.js          # Entry point
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/akramansari27923mah-dotcom/ai-email-auth-api.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd ai-email-auth-api
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
```

### 5️⃣ Run the Server

```bash
npm run dev
```

---

##  API Endpoints

###  Authentication Routes

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | /register | Register new user |
| POST   | /login    | Login user        |
| POST   | /logout   | Logout user       |
| GET    | /get-me   | Get user profile  |

---

##  AI Feature

### 📧 Generate Email

* Uses **Groq API** to generate professional emails
* Accepts user input (prompt)
* Returns structured email format:

  * Subject
  * Greeting
  * Body
  * Closing

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙋‍♂️ Author

**Akram Ansari**
💻 Web Developer
🚀 Aspiring Full Stack Developer

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
