# Working through the Scrimba course on Node.js

## This is the second part of the Scrimba Node course - Routes and Paths.

# Routes and Paths – Node.js Project

A simple Node.js project based on the Scrimba course, demonstrating how to work with **routes**, **paths**, and basic server responses using the core `http` and `path` modules.

## 🚀 Features

- Serves different responses based on the URL route
- Demonstrates manual routing without Express
- Handles **GET** and **POST** requests
- Uses built-in Node.js modules (`http`, `path`, possibly `fs`)
- Good starter for understanding backend fundamentals

## 📂 Project Structure (example)

project-folder/
├── server.js
├── utils/
│ └── sendJSONResponse.js
├── database/
│ └── db.js
└── package.json

shell
Copy code

_Your structure may vary slightly depending on how you followed the Scrimba lessons._

## ▶️ Getting Started

### 1. Install dependencies

If the project includes a `package.json` file:
npm install

shell
Copy code

### 2. Run the server

node server.js

vbnet
Copy code

By default, it typically runs on:
http://localhost:8000

markdown
Copy code

## 🌐 Example Routes

| Route       | Method | Description                   |
| ----------- | ------ | ----------------------------- |
| `/`         | GET    | Home route / default response |
| `/about`    | GET    | Sample secondary route        |
| `/api/data` | GET    | Example JSON/data response    |
| `/submit`   | POST   | Example POST handler          |
| `/404`      | GET    | Fallback for unknown routes   |

_Update or rename routes based on your implementation._

## 📮 GET and POST Requests

This project demonstrates how to manually handle HTTP methods using Node's `http` module:

### ✅ GET Requests

Used to retrieve and display data. Examples might include:

- Serving HTML or text responses
- Returning JSON from a simulated database or file
- Checking the request URL and method

### ✅ POST Requests

Used to send data **from the client to the server**. In the Scrimba project, this is often demonstrated by:

- Listening for incoming data chunks with `req.on("data", ...)`
- Parsing JSON or text
- Sending a confirmation response back to the client
- Optionally saving to a local file or in-memory array

Typical structure:

```js
if (req.url === "/submit" && req.method === "POST") {
  // handle incoming POST data here
}
🛠 Technologies Used
Node.js

http module

path module

Optional: fs, JSON data files, utility functions

✅ What You’ll Learn
How to create a basic HTTP server with Node.js

How to handle routes manually

How to process GET and POST requests

How to return JSON or HTML responses

How to structure a simple backend project without frameworks

📌 Notes
This project is part of the Scrimba Node.js course and is intended for practice and learning. You can extend it later by:

Adding routing libraries or Express

Handling more HTTP verbs (PUT, DELETE)

Serving static content

Connecting to real databases
```
