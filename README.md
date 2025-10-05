# 📧 AI Email Reply Generator  

An **AI-powered Gmail Reply Generator** that helps users compose smart, tone-adjusted replies directly inside Gmail.  
Built with **Spring Boot (backend)**, **React + Vite + Material UI (frontend)** and a **Chrome Extension** for seamless Gmail integration.  

---

## 🚀 Features  
- ✨ Generate **AI-powered email replies** using Gemini API.  
- 🎨 Choose different tones – **Professional, Casual, Friendly**.  
- ⚡ Backend with **Spring Boot REST APIs** for fast response generation.  
- 🖥️ **React + Vite + Material UI** frontend for a smooth UI experience.  
- 📩 **Chrome Extension** that plugs directly into Gmail’s compose window.  
- 🔐 Secure API integration with authentication.  

---

## 🛠️ Tech Stack  
- **Backend:** Java, Spring Boot, REST API, IntelliJ, Hibernate  
- **Frontend:** React, Vite, Material UI  
- **Extension:** Chrome Extension (Manifest V3), JavaScript  
- **AI Integration:** Gemini API  

---

## 📂 Project Structure  
ai-email-reply-generator/
│
├── backend/ # Spring Boot application (APIs, services)
│ ├── src/main/java/...
│ └── pom.xml
├── frontend/ # React + Vite + Material UI frontend
│ ├── src/
│ ├── vite.config.js
│ └── package.json
├── extension/ # Chrome Extension files
│ ├── manifest.json
│ ├── background.js
│ ├── content.js
│ ├── popup.html
│ └── popup.js
└── README.md

---
![Mobile UI](src/assets/images/image2.png)
![Desktop UI](src/assets/images/image1.png)


## ⚙️ Setup & Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/ai-email-reply-generator.git
cd ai-email-reply-generator

cd backend
mvn spring-boot:run

cd frontend
npm install
npm run dev

Runs on: http://localhost:5173


