# 💬 ChitChat

**A full-stack real-time chat app — Web & Mobile — sharing one backend.**

Built with Clerk auth, MongoDB, REST APIs, and Socket.IO.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://chitchat-ked0.onrender.com)
[![GitHub](https://img.shields.io/badge/repo-GitHub-181717?logo=github)](https://github.com/Mangalam13114/ChitChat)
![Bun](https://img.shields.io/badge/runtime-Bun-000000?logo=bun)
![License](https://img.shields.io/badge/license-MIT-blue)

🔗 **Live App:** https://chitchat-ked0.onrender.com
📦 **Repo:** https://github.com/Mangalam13114/ChitChat

---

## 📌 Overview

ChitChat is a real-time messaging app with a **React/Vite web client** and a **React Native/Expo mobile client**, both powered by the same **Bun + Express + TypeScript** backend.

Built by following *[The Ultimate React Native Chat App in 2026](https://youtu.be/ufo46oWej3g)* by Burak Orkmez — covering the full workflow: setup, auth, MongoDB, REST APIs, Socket.IO, mobile & web development, monitoring, Docker, and deployment. This is the completed tutorial build and the base for future features.

---

## ✨ Features

| Category | Highlights |
|---|---|
| 🔐 **Auth** | Clerk-based login, Google/social sign-in, protected routes, shared sessions across Web & Mobile |
| 💬 **Messaging** | Real-time 1:1 chat via Socket.IO, persisted in MongoDB, chat history, auto-scroll |
| 🟢 **Presence** | Online/offline status, live typing indicators |
| 👥 **Chat Management** | Conversation list, user search, new-chat flow, last-message previews |
| 🛡️ **Monitoring** | Sentry crash/error tracking, CORS & environment-based config |
| 🚀 **Deployment** | Dockerized backend, hosted on Render with MongoDB Atlas |

---

## 🏗️ Architecture

```
                    ┌─────────────┐
                    │  Clerk Auth │
                    └──────┬──────┘
             ┌─────────────┴─────────────┐
      ┌──────▼──────┐             ┌──────▼──────┐
      │  Web Client │             │ Mobile App  │
      │ React/Vite  │             │React Native │
      └──────┬──────┘             └──────┬──────┘
             └────── REST + Socket.IO ────┘
                          │
                 ┌────────▼────────┐
                 │  Backend Server │
                 │ Bun + Express   │
                 └────┬───────┬────┘
                       ▼       ▼
                ┌───────────┐ ┌───────────┐
                │ MongoDB   │ │ Socket.IO │
                │  Atlas    │ │ Real-Time │
                └───────────┘ └───────────┘
```

- **REST API** → persistent operations (users, chats, messages)
- **Socket.IO** → real-time events (messages, typing, presence)

---

## 🛠️ Tech Stack

**Backend:** Bun · TypeScript · Express.js · MongoDB/Mongoose · Socket.IO · Clerk Express · Docker

**Web:** React · Vite · React Router · TanStack Query · Axios · Zustand · Tailwind CSS · DaisyUI

**Mobile:** React Native · Expo (SDK 57) · Expo Router · Clerk Expo · NativeWind · Sentry RN

**Infra:** MongoDB Atlas · Clerk · Render · Docker · Sentry

<details>
<summary>📦 Full version list (click to expand)</summary>

**Backend:** TypeScript ^7 · Express 5.2.1 · Mongoose 9.0.2 · Socket.IO 4.8.2 · @clerk/express 1.7.60 · CORS 2.8.5

**Web:** React ^19.2.8 · React Router ^8.4.0 · Vite ^8.2.2 · Tailwind ^4.3.3 · DaisyUI ^5.7.42 · TanStack Query ^5.103.1 · Zustand ^5.0.15

**Mobile:** Expo ~57.0.19 · React Native 0.86.3 · NativeWind ^4.2.6 · Clerk Expo ^4.6.2 · Sentry RN ^8.25.0 · TypeScript ~6.0.3

</details>

---

## 🧩 Project Structure

```
ChitChat/
├── backend/    # Bun + Express + TypeScript API & Socket.IO
├── mobile/     # React Native + Expo app
├── web/        # React + Vite app
├── Dockerfile
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Git · Bun · Node.js · MongoDB Atlas account · Clerk account · Expo Go (for mobile)

### Setup

```bash
git clone https://github.com/Mangalam13114/ChitChat.git
cd ChitChat
```

**Backend**
```bash
cd backend && bun install && bun run dev
```

**Web** (new terminal)
```bash
cd web && bun install && bun run dev
```

**Mobile** (new terminal)
```bash
cd mobile && bun install && bunx expo start
```
Scan the QR code with **Expo Go**, or run natively:
```bash
bunx expo run:android
bunx expo run:ios
```

### Environment Variables

> ⚠️ Never commit `.env` files or secret keys.

<details>
<summary>Backend</summary>

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
FRONTEND_URL=http://localhost:5173
```
</details>

<details>
<summary>Web</summary>

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=your_api_url
VITE_SENTRY_DSN=your_sentry_dsn
```
</details>

<details>
<summary>Mobile</summary>

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```
</details>

---

## 🐳 Docker

```bash
docker build -t chitchat .
docker run -p 3000:3000 chitchat
```

## ☁️ Deployment

`GitHub → Render → Docker build → Bun + Express → MongoDB Atlas`

Live at: **https://chitchat-ked0.onrender.com**

---

## 🗺️ Roadmap

- **Messaging:** reactions, edit/delete, replies, read receipts, search
- **Media:** images, video, files, voice messages
- **Chats:** group chats, admins, block/unblock
- **Calls:** voice/video via WebRTC
- **Notifications:** push, unread counts
- **Infra:** CI/CD, automated tests, Socket.IO scaling, DB indexing

---

## 📚 What This Project Demonstrates

Full-stack architecture · REST API design · Auth & authorization · MongoDB data modeling · Real-time systems (Socket.IO, presence, typing) · Docker & cloud deployment · Error monitoring · Debugging dev/prod issues

---

## 🙏 Credits

Built by following **[The Ultimate React Native Chat App in 2026](https://youtu.be/ufo46oWej3g)** by Burak Orkmez.

This is my own implementation — developed, debugged, configured, and deployed independently on my own GitHub/Render/MongoDB setup.

---

## 👨‍💻 Author

**Kumar Mangalam**
B.Tech Computer Science | Full-Stack Developer
[GitHub @Mangalam13114](https://github.com/Mangalam13114)
