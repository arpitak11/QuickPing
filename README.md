# QuickPing

QuickPing is a real-time chat application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **Socket.IO** for instant messaging. It features secure user authentication, live conversations, and a clean UI — perfect for fast, efficient, and private communication.

---

## 🚀 Features

* 🔐 **User Authentication**
  Sign up and log in securely. Passwords are encrypted before storage.

* 💬 **Real-Time Messaging**
  Messages are instantly delivered using WebSockets via Socket.IO.

* 👤 **User Status Management**
  View online users and active conversations.

* 🧠 **State Management with Context API**
  Authentication and user state are handled cleanly across the app.

* 🎨 **Responsive UI**
  Built with TailwindCSS for a sleek and adaptive user experience.

* 🌐 **MongoDB Atlas**
  Cloud-based NoSQL database to store users and message history.

---

## 🛠️ Tech Stack

| Frontend | Backend           | Database      | Real-time |
| -------- | ----------------- | ------------- | --------- |
| React.js | Node.js + Express | MongoDB Atlas | Socket.IO |

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/QuickPing.git
cd QuickPing
```

### 2. Environment Setup

#### 🔹 Backend (`/backend`)

* Create a `.env` file:

```env
MONGO_URI=your_mongo_connection_string
PORT=3000
```

* Install dependencies:

```bash
npm install
npm run server
```

#### 🔹 Frontend (`/frontend`)

* Install dependencies:

```bash
npm install
npm run dev
```

> Make sure MongoDB Atlas has your IP whitelisted.

---

## 🧠 Future Improvements

* Add emoji support and media sharing
* Integrate voice/video chat
* Push notifications for new messages
* Message deletion and editing
* Dark mode support

---
