# User Authentication API

This is a backend application for user authentication built with NestJS, utilizing the MERN stack architecture. The API provides endpoints for user registration and login, with JWT-based authentication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)

## Features

- User registration with password hashing
- User login with JWT authentication
- Swagger API documentation
- CORS enabled
- Environment variable management
- Docker support for easy deployment

## Technologies

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (running instance or use Docker)
- Docker (optional, for containerization)

### Clone the Repository

```bash
git clone https://github.com/your-username/user-auth-app.git
cd user-auth-app 
```

### Install Dependencies
```bash
yarn install
```

### Configuration
- Create a .env file in the root directory and add the following configuration variables:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/nest_auth
JWT_SECRET=your_jwt_secret_key
```

- PORT: The port on which the application will run.
- MONGO_URI: The MongoDB connection string.
- JWT_SECRET: The secret key used for signing JWTs.

### Running the Application
```bash 
./docker-up.sh
```

### Swagger url
- [Swagger Doc URL](http://localhost:3000/api-docs)
