# Todo App

A sleek, responsive, and modern Todo web application built using **React 18** and **Vite**.

## 🚀 Live Demo

Check out the live application on GitHub Pages:
[https://ramyaare08.github.io/todo-app/](https://ramyaare08.github.io/todo-app/)

---

## ✨ Features

- **Add & Manage Tasks**: Easily add, toggle completion, and delete tasks.
- **Filter Tasks**: Filter by `All`, `Active`, or `Completed` tasks.
- **Persistent Storage**: Automatically saves tasks to browser `localStorage`.
- **Progress Tracking**: Real-time stats showing remaining and completed tasks.
- **Batch Actions**: Quick action to clear all completed tasks.
- **Responsive & Modern Design**: Clean typography, smooth transitions, and mobile-friendly layout.
- **Modular Architecture**: Built with modular components (`Header`, `TaskForm`, `Stats`, `Filters`, `TaskList`, `TaskItem`, `EmptyState`, `CardFooter`).

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **CSS3** (Vanilla CSS with CSS custom properties)
- **GitHub Actions** (Automated GitHub Pages deployment)

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ramyaare08/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
todo-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   └── favicon.svg             # App favicon
├── src/
│   ├── components/
│   │   ├── CardFooter.jsx      # Bottom controls & task counter
│   │   ├── EmptyState.jsx      # Placeholder when no tasks are present
│   │   ├── Filters.jsx         # Status filter buttons
│   │   ├── Header.jsx          # App title and brand icon
│   │   ├── Stats.jsx           # Task counter stats
│   │   ├── TaskForm.jsx        # Task creation input form
│   │   ├── TaskItem.jsx        # Single task row component
│   │   └── TaskList.jsx        # List container rendering TaskItems
│   ├── App.css                 # Application styling
│   ├── App.jsx                 # Main application component (modular)
│   ├── App.standalone.jsx      # Monolithic original App.jsx
│   ├── index.css               # Global base styles & reset
│   └── main.jsx                # React root mount
├── .gitignore
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── README.md                   # Documentation
└── vite.config.js              # Vite configuration
```

---

## Contributors

- [<Ramyaare08>](https://github.com/Ramyaare08)
