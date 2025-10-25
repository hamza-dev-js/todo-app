# Todo App

A simple full-stack Todo application built with **React** for the frontend and **Node.js/Express** for the backend. The app allows users to register, login, create, edit, and delete todo tasks.

## Features

- User registration and login with JWT authentication
- Add, edit, delete todo tasks
- Mark tasks as completed or pending
- Secure backend with password hashing (bcrypt)
- Responsive frontend design using Tailwind CSS

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express
- **Database:** MySQL
- **Authentication:** JWT
- **Password Security:** bcrypt

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-app.git

2. Install backend dependencies:

cd todo-app/todo-backend
npm install

3. Install frontend dependencies:

cd ../todo-frontend
npm install

4. Create a .env file in the backend folder with the following variables:

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret

5. Start the backend server:

cd ../todo-backend
node server.js

6. Start the frontend:

cd ../todo-frontend
npm start

Usage:

Register a new account or login with an existing account.

Add a new todo task using the input field.

Edit or delete tasks using the corresponding buttons.

Toggle task completion by clicking the check icon.

