# Intern Assignment - Frontend

## Project Overview

This assignment is designed to display graphs of different stocks and their durations. The application allows users to visualize stock data in an interactive and user-friendly manner.

## Live Link

You can access the live application at: [https://assesment-alloan.web.app](https://assesment-alloan.web.app).

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **React-Chart**: A library for creating charts in React applications.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Redux Toolkit**: A library for managing global state in React applications.
- **Thunk**: Middleware for handling asynchronous logic in Redux.

## Approach

1. **Setup**: Initialized the project using Vite with React and TypeScript templates.
2. **Development**: Implemented the required features and components using React, TypeScript, React-Chart, TailwindCSS, and Redux Toolkit.
3. **Testing**: Ensured the application works as expected with various test cases.
4. **Optimization**: Used Vite's fast refresh capabilities for a better development experience.

## File Structure

```
frontend/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── tailwind.config.js
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Main Dependencies

- **react**: ^17.0.2
- **react-dom**: ^17.0.2
- **react-redux**: ^7.2.4
- **@reduxjs/toolkit**: ^1.5.1
- **redux-thunk**: ^2.3.0
- **react-chartjs-2**: ^3.0.3
- **chart.js**: ^3.2.0
- **tailwindcss**: ^2.1.2
- **typescript**: ^4.2.4
- **vite**: ^2.3.2

## Steps to Use the Application

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/ayushflows/Alloan.ai-Stock-Graph-Assesment.git
    cd frontend
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Add Environment Variables**:
    Create a `.env` file in the root directory and add the necessary environment variables:
    ```sh
    VITE_BACKEND_URI=http://localhost:3000/
    VITE_FIREBASE_API_KEY=<your_firebase_api_key>
    VITE_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
    VITE_FIREBASE_PROJECT_ID=<your_firebase_project_id>
    VITE_FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
    VITE_FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
    VITE_FIREBASE_APP_ID=<your_firebase_app_id>
    ```

4. **Run the Application**:
    ```sh
    npm run dev
    ```

5. **Open in Browser**:
    Open your browser and navigate to `http://localhost:5173` to view the application.

## Assignment Details

### Implemented Features

- A dropdown to select a stock.
- A way to switch between durations for the selected stock.
- A graph for the selected stock and duration that updates dynamically as data is received.
- Responsive and visually appealing design.

### Tech Constraints

- Used Redux Toolkit for managing global state and thunk for API calls.
- Avoided drilling props beyond level 2.
- Used pre-built components and libraries (e.g., MUI, react-chartjs).

### Additional Points

- Hosted the application and shared a link.

## Conclusion

This project demonstrates the setup and configuration of a React application using TypeScript and Vite. The approach ensures a robust and maintainable codebase, with a focus on displaying stock data interactively.
