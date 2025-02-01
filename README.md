
# Overview

The Educational Platform API is a backend service designed to manage online courses and quizzes. It provides RESTful API endpoints for creating, retrieving, updating, and deleting courses and quizzes. Built using Node.js, Express, and MongoDB, this API serves as the foundation for an e-learning platform.

## Features

- Course Management (Create, Read, Update, Delete)
- Quiz Management (Create, Read, Update, Delete)
- MongoDB Database for data storage
- Middleware for handling requests efficiently
- CORS support for cross-origin requests
- Environment variable support with dotenv




## Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Environment Management: dotenv

Middleware: cors, body-parser


## Run Locally

Clone the project

```bash
  git clone https://github.com/gupta03akshita/EduPlatform_Backend.git
```

Go to the project directory

```bash
  cd project-folder
```

Install dependencies

```bash
  npm install
```
Create a .env file and add your environment variables

```bash
    touch .env
```
EXAMPLE:
```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/educational_platform
```

Start the server

```bash
  npm run dev
```

