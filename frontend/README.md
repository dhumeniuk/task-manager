# Task Manager Frontend

This directory contains the React Native application for the Task Manager project.

## Technologies Used

- React Native (Expo)
- TypeScript
- Apollo Client

## Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Application

To start the React Native development server, run:

```bash
npm start
```

This will open the Expo developer tools in your browser, from which you can run the app on an emulator, simulator, or your physical device.

**Note:** Ensure your backend server is running before starting the frontend application. The backend now runs on port 4001 by default (see backend/README.md).

## Features
- Input validation when adding a new task (prevents empty or whitespace-only tasks)
- Type safety for task items