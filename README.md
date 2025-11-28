
# 💬 Simple-Chat-Room

A fully functional real-time group chat built using Spring Boot WebSockets + STOMP.
Multiple users can join, send messages, and instantly see updates across all connected browsers - zero refresh, zero delay.  

---

## 🚀 Tech Stack
Backend
- Java Spring Boot
- Spring WebSocket
- STOMP Protocol
- Thymeleaf
  
Frontend
- HTML / CSS
- JavaScript (ES6)
- SockJS
- STOMP.js 

---

## Things Learned:
1. Real-time communication with WebSockets

- Difference between traditional HTTP (request–response) vs WebSockets (persistent, bi-directional).
- How servers can push updates instantly without polling.

2. Setting up WebSockets in Spring Boot

- Configured WebSocket with STOMP support.
- Created WebSocket endpoint: /chat
- Enabled message broker routes: /topic and /app
- Learned Spring’s routing and connection handling.

3. Using STOMP for structured message flow

- STOMP simplifies:
- message destinations
- subscriptions
- broadcast channels
- Helps in building scalable multi-user chat messaging.

4. Chat message broadcasting controller

- Built a ChatController that:
- Receives messages on: /app/send-message
- Broadcasts to: /topic/messages
- Used @MessageMapping and @SendTo for routing.

5. Frontend using SockJS + STOMP.js

- Implemented:
- SockJS() for fallback support
- Stomp.over() for STOMP connections
- Client-side functions:
- connect() – establishes WebSocket
- sendMessage() – sends chat messages
- showMessage() – renders messages live on screen

6. UI rendering with Thymeleaf

- Created UI templates using Thymeleaf.
- Combined server-rendered pages with real-time JavaScript updates.

7. Handling multiple users

- Observed how Spring manages WebSocket sessions.
- All clients stay synchronized in real-time.

8. Structuring chat messages

- Created a ChatMessage model with:
- id
- sender
- content
- Learned how JSON data moves seamlessly through WebSockets.

💡 How It Works (In Short)

1. Client connects to /chat WebSocket endpoint.

2. Subscribes to /topic/messages.

3. When someone sends a message:

4. Frontend sends it to /app/send-message.

5. Backend receives & broadcasts to /topic/messages.

6. All clients instantly receive and display the message.

✔️ Result: A smooth, real-time group chat experience.

---
![Mobile UI](src/assets/images/image2.png)
![Desktop UI](src/assets/images/image1.png)


## ⚙️ Setup & Installation  

### Clone the Repository  
```bash
git clone https://github.com/your-username/ai-email-reply-generator.git
cd ai-email-reply-generator

cd backend
mvn spring-boot:run

cd frontend
npm install
npm run dev

Runs on: http://localhost:5173


