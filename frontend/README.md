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

## Building an iOS App for Your Device

To create an iOS image (IPA) that you can install on your device:

1. Install EAS CLI:
   ```sh
   npm install -g eas-cli
   ```
2. Login to Expo:
   ```sh
   eas login
   ```
3. Configure EAS for your project:
   ```sh
   eas build:configure
   ```
4. Start an iOS build:
   ```sh
   eas build -p ios --profile development
   ```
   Follow the prompts to set up your Apple Developer credentials.
5. Download and install the IPA:
   - Once the build is complete, Expo will provide a link to download the IPA file.
   - You can install the IPA on your device using TestFlight, Xcode, or AltStore.

## Features
- Input validation when adding a new task (prevents empty or whitespace-only tasks)
- Type safety for task items