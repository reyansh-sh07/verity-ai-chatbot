# Verity — AI Chatbot

> A simple AI-powered personal chatbot built with a Node.js backend and a minimal web-based chat interface.

Verity is a full-stack AI chatbot that allows users to interact with an AI model through a clean, single-page web interface.
The project originally started as a command-line chatbot and was later upgraded into a web application with a separate frontend and backend.

---

## Features
- AI-powered conversational interface
- Clean single-page chat UI
- Node.js and Express backend
- OpenRouter API integration
- OpenAI SDK for communicating with the AI API
- Secure API key handling using environment variables
- Frontend-to-backend communication using HTTP requests
- Error handling for failed AI requests
- Responsive and minimal interface
- Custom color theme

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- OpenAI SDK
- dotenv

### AI

- OpenRouter API
- Cohere North Mini Code

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## Project Architecture

The application follows a simple client-server architecture:

```text
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       │ Message
       ▼
┌─────────────────────┐
│   Frontend (UI)     │
│     HTML / CSS / JS │
└──────────┬──────────┘
           │
           │ HTTP Request
           ▼
┌─────────────────────┐
│   Node.js Server     │
│       Express        │
└──────────┬──────────┘
           │
           │ API Request
           ▼
┌─────────────────────┐
│     OpenRouter API   │
└──────────┬──────────┘
           │
           │
           ▼
┌─────────────────────┐
│      AI Model        │
└──────────┬──────────┘
           │
           │ AI Response
           ▼
┌─────────────────────┐
│   Node.js Server     │
└──────────┬──────────┘
           │
           │ JSON Response
           ▼
┌─────────────────────┐
│      Frontend        │
│   Displays AI Reply  │
└─────────────────────┘
---

# Project Structure

Verity/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### `public/`

Contains the frontend of the application.

- `index.html` — Structure of the chatbot interface.
- `style.css` — UI styling and color theme.
- `script.js` — Handles user interaction and communication with the backend.

### `src/`
Contains the backend application.
- `app.js` — Creates the server and handles requests to the AI API.


### Environment & Configuration

- `.env` — Stores sensitive environment variables such as the API key. This file should never be committed to GitHub.
- `.gitignore` — Prevents sensitive or unnecessary files from being uploaded to the repository.
- `package.json` — Contains project metadata, dependencies, and scripts.
- `package-lock.json` — Locks dependency versions.
- `README.md` — Contains project documentation.

---

# How It Works

When a user sends a message:

1. The user enters a message in the Verity chat interface.
2. The frontend sends the message to the Node.js backend.
3. The backend receives the request.
4. The backend sends the message to OpenRouter.
5. OpenRouter forwards the request to the selected AI model.
6. The AI generates a response.
7. The response is returned to the backend.
8. The backend sends the response back to the frontend.
9. Verity displays the response in the chat interface.

This keeps the AI API credentials on the server instead of exposing them in client-side JavaScript.
