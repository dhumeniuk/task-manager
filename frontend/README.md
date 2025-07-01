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

This will open the Expo developer tools in your browser.

## Running on Your iOS Device (Free, No Build Required)

1. **Install the Expo Go app** from the App Store on your iPhone.
2. **Start the development server:**
   ```sh
   npm start
   ```
3. **Scan the QR code** shown in the Expo developer tools using the Expo Go app on your device.
4. Your app will load instantly on your iPhone.

**Note:**
- This method works as long as you do not use custom native code or Expo modules not supported by Expo Go.
- Ensure your backend server is running before starting the frontend application. The backend now runs on port 4001 by default (see backend/README.md).

## Features
- Input validation when adding a new task (prevents empty or whitespace-only tasks)
- Type safety for task items