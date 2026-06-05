# SEO PLUS – AI SEO Analyzer & Keyword Rank Tracker

SEO PLUS is a full-stack web application that helps users analyze website SEO performance and track keyword rankings over time. It combines browser automation, AI-powered analysis, and rank tracking into a single platform.

## Features

### AI SEO Audit

* Analyze any website by entering its URL.
* Render pages using Browserbase and Playwright.
* Generate AI-powered SEO reports using Gemini AI.
* Receive SEO scores, keyword insights, and actionable recommendations.

### Keyword Rank Tracking

* Track keyword rankings on Google.
* Monitor ranking history over time.
* View competitor rankings.
* Automatic daily rank updates using scheduled cron jobs.

### User Authentication

* Secure user registration and login.
* JWT-based authentication.

## Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Integrations

* Browserbase
* Playwright
* Gemini AI

### Deployment

* Vercel (Frontend & Backend)
* MongoDB Atlas


### Install Dependencies

Frontend
cd client
npm install


Backend
cd server
npm install


### Configure Environment Variables

Create a `.env` file and add:

MONGODB_URI=
JWT_SECRET=
GEMINI_API_KEY=
BROWSERBASE_API_KEY=


### Run Application

Frontend
npm run dev

Backend
npm start


