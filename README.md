# CloudOps Dashboard

For a quick overview and feature walkthrough please watch the video - https://youtu.be/mDvy6Q2lkgk

## Overview

This repository contains a CloudOps Dashboard built with React, Next.js, TypeScript, and Tailwind CSS. The dashboard is designed to provide insights into cloud operations, including resource usage, performance metrics, and system health.

## Technologies Used

- **React@19.0.0**
- **Next.js@15.3.4**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Shadcn UI**
- **Fuse.js**: A lightweight fuzzy-search library that allows for fast and flexible searching of resources.
- **cmdk**: Fast, composable, unstyled command menu for React.
- **Sonner**: A toast notification library for React that provides a simple and customizable way to display notifications.
- **Tanstack React Table**: A powerful table library for React that provides features like sorting, filtering, and pagination.
- **class-variance-authority** - A utility for managing class names in a type-safe way.
- **Lucide Icons** - A set of icons for use in web applications.
- **Hosted on** - Vercel
- **Running on node@v22.12.0**

## Special mentions 🍕

- **Broadcast Channel API**: The dashboard uses the Broadcast Channel API to enable real-time communication between different tabs or windows of the application. This allows for features like real-time notifications and updates across multiple instances of the dashboard.
- **React Context API**: The dashboard uses the React Context API to manage user state, notifications allowing for easy access to shared data across components without prop drilling.

## Features

- **Mocked Read-time notifications**: The dashboard includes a mocked real-time notification system that simulates incoming alerts and updates.
- **Global Search**: Users can search for resources and various other keys, across the dashboard using a global search bar.
- **Search Functionality**: Users can search for specific resources or metrics using a search bar within resources table.
- Beautiful charts and graphs to visualize data.
- Structured and organized codebase with TypeScript for type safety.
- Reusable components, hooks and utilities for better maintainability.
- **Dark Mode**: The dashboard supports dark mode
- **Responsive Design**: The dashboard is fully responsive and works on various devices.

## How to run


1. Clone the repository:

2. Be on Node v22.12.0 or run `nvm use`. 

3. Install dependencies

  ```
    npm install
  ```

4. Start the application in development mode:

  ```
    npm run dev
  ```

## For production
1. Build the application for production:

  ```
    npm run build
  ```

2. Start the application in production mode:

  ```
    npm run start
  ```

-----
[evilhead.me](https://evilhead.me)
