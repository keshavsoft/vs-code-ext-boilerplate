# vs-code-ext-boilerplate 📄

Visual Studio Code extension for instantly generating node and Express boilerplate projects with simple architecture.

Create complete backend starter templates directly from the VS Code Explorer right-click menu.

---

# 🎯 Main Features

The extension provides two powerful boilerplate generators:

---

# 🛠️ How It Works

## Step 1

Right-click on VS Code Explorer

---

## Step 2

Choose one of the options:
```bash id="z1k7xy"
Express BoilerPlate Templates
```

or

```bash id="z1k7xy"
Express BoilerPlate with Simple
```

or

```bash id="a8m5ru"
Express BoilerPlate with simple crud functionality
```
---

## Step 3

The extension instantly generates the selected project template.

---

# ⚡ Features

✅ One-click Express.js boilerplate generation
✅ Ready project template
✅ Public folder with UI pages
✅ Beginner-friendly setup
✅ Faster backend initialization
✅ VS Code Explorer integration
✅ Clean and modular architecture

---

# 📁 Folder Structure

```bash id="n6y4qp"
vs-code-ext-boilerplate
│
├── .vscode
├── Config
├── Public
├── node_modules
├── .env
├── .env.local
├── app.js
├── config.json
├── configLoader.js
├── package-lock.json
├── package.json
├── port.js
├── routes.js
└── server.js
```
---

# 💡 Why Use This Extension?

* Avoid repetitive project setup
* Quickly bootstrap Express applications
* Generate CRUD-ready architecture instantly
* Save development time
* Maintain clean folder structure

---

# 🧠 Built With

* Node.js
* Express.js
* JavaScript
* HTML5
* VS Code Extension API

---

## 📄 Understanding app.js

The `app.js` file is the main entry point for your Express.js backend project. It is responsible for initializing the application, loading the project configuration, registering all API routes, and preparing the server before it starts accepting requests.

The EndPointGen extension uses `app.js` as the starting point for generating and wiring backend modules automatically. When you execute the **StartEndPoint** command, the extension analyzes the existing project structure and generates the required folders and route files while keeping the project organized.

### Responsibilities of app.js

- Initialize the Express application.
- Load project configuration using `configLoader.js`.
- Register all generated routes.
- Connect newly created API modules automatically.
- Organize middleware and application startup.
- Maintain a clean and scalable project structure.
- Act as the central integration point for generated code.

### Typical Flow

```
app.js
   │
   ├── Load Configuration
   │
   ├── Register Routes
   │
   ├── Connect Generated APIs
   │
   ├── Initialize Express Middleware
   │
   └── Start Server
```

Keeping `app.js` as the central entry point allows the extension to generate new APIs without requiring manual route registration, making backend development faster, consistent, and easier to maintain.

# 📄 License

MIT License

---

# 👨‍💻 Author

Developed by **KeshavSoft**

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Share with developers
