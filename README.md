# Just Another Text Editor (J.A.T.E)

J.A.T.E (Just Another Text Editor) is a web-based text editor application that allows you to create and manage notes or code snippets with or without an internet connection. It provides a reliable way to store and retrieve your content for later use. J.A.T.E is built using modern web technologies such as JavaScript, HTML, and CSS, and utilizes features like IndexedDB, service workers, and webpack bundling.

## Features

- Create and edit notes or code snippets
- Offline functionality: Works even without an internet connection
- Automatic content saving: Your content is saved as you type
- IndexedDB storage: Reliable and persistent storage for your content
- Installable as a Progressive Web App (PWA): Can be installed as an icon on your desktop or home screen
- Service worker caching: Static assets and pages are cached for faster subsequent loads

## Installation

To run the J.A.T.E text editor application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies.
4. Start the development server.
5. The application will be accessible at [http://localhost:3000](http://localhost:3000).

# Clone the repository
git clone https://github.com/batwood99/Text-Editor

# Navigate to the project directory
cd Text-Editor

# Install dependencies
npm install

# Start the development server
npm run dev

# Usage
Once the application is running, you can open it in your browser by visiting http://localhost:8080. The text editor will be displayed, allowing you to start creating and editing notes or code snippets.

# Offline Functionality
J.A.T.E supports offline functionality, allowing you to use the text editor even without an internet connection. The content you enter will be saved locally using IndexedDB, ensuring your data is persistent. When you go offline, you can continue working on your notes or code snippets, and once you regain an internet connection, the data will automatically sync.

# Progressive Web App (PWA)
J.A.T.E can be installed as a Progressive Web App (PWA) on your desktop or mobile device. This enables you to access the text editor directly from your home screen, similar to a native application. When you visit the application in your browser, you can click on the "Install" button to initiate the installation process.

# Service Worker Caching
The application utilizes a service worker to cache static assets and pages, providing faster subsequent loads. When you load the application, the service worker registers and starts caching the necessary files. This ensures that the text editor is available offline and improves overall performance.

# License
This project is licensed under the MIT License.