# Support CRM

A full-stack Support CRM application built using React, Node.js, Express.js, and MongoDB Atlas. The application enables support teams to create, manage, search, filter, and update customer support tickets through a clean and responsive interface.

## Live Demo

https://support-crm-opal.vercel.app/

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Features

### Authentication

* Admin Login Interface

### Ticket Management

* Create New Support Tickets
* View All Tickets
* View Ticket Details
* Update Ticket Status

### Search & Filter

* Search tickets by:

  * Ticket ID
  * Customer Name
  * Customer Email
  * Subject
  * Description

* Filter tickets by:

  * Open
  * In Progress
  * Closed

### Dashboard

* Ticket Statistics
* Total Tickets
* Open Tickets
* In Progress Tickets
* Closed Tickets

### UI/UX

* Responsive Design
* Modern Dashboard Layout
* Status Badges
* Loading Indicators
* Empty State Handling

---

## Project Structure

```bash
support-CRM/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/OmkarPatil45/support-CRM.git
```

```bash
cd support-CRM
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
NODE_ENV=development
```

Start backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_API_URL=your_url
```

Start frontend:

```bash
npm run dev
```

---

## API Endpoints

### Create Ticket

```http
POST /api/tickets
```

### Get All Tickets

```http
GET /api/tickets
```

### Search Tickets

```http
GET /api/tickets?search=value
```

### Filter Tickets

```http
GET /api/tickets?status=Open
```

### Get Ticket By ID

```http
GET /api/tickets/:ticketId
```

### Update Ticket Status

```http
PUT /api/tickets/:ticketId
```

---

## Challenges Faced

* Implementing dynamic search and filtering.
* Managing frontend-backend integration.
* Handling route-based ticket details.
* Configuring production deployment on Vercel and Render.
* Managing environment variables across development and production environments.

---

## Future Improvements

* JWT Authentication
* Role-Based Access Control
* Email Notifications
* Pagination
* Activity Logs
* Automated Testing
* Docker Support
* CI/CD Pipelines

---

## Author

Omkar Patil

GitHub: https://github.com/OmkarPatil45

---
