# Developer Guide — vs-code-ext-boilerplate 🚀

## Overview

`vs-code-ext-boilerplate` is a Visual Studio Code extension for generating Express.js starter templates directly from the VS Code Explorer context menu.

This project focuses on rapid backend initialization and CRUD-ready architecture generation.

---

# 🎯 Development Goals

The extension currently supports:

* Simple Express.js boilerplate generation
* CRUD-based boilerplate generation
* Automatic folder structure creation
* Public UI initialization
* Route setup generation
* Environment configuration generation

---

# ⚡ Boilerplate Types

---

# 1️⃣ Express BoilerPlate with Simple

Generates a minimal Express.js backend structure.

### Generated Files

```bash id="j4m8xp"
Public/
index.html
app.js
server.js
routes.js
.env
package.json
```

### Purpose

* Quick backend startup
* Lightweight Express.js setup
* Minimal public UI

---

# 2️⃣ Express BoilerPlate with Simple CRUD Functionality

Generates CRUD-ready backend architecture.

### Generated Files

```bash id="z8n2fr"
Public/
├── index.html

Api/
 └──V1
    ├── routes.js
    └── end-points.js

app.js
server.js
routes.js
.env
package.json
```

### Purpose

* CRUD-ready structure
* API version architecture
* Faster backend scaffolding
* Rapid prototype development

---

# 🛠️ Developer Workflow

## Step 1 — Extension Deployment

Run extension in VS Code:

```bash id="f2w7ke"
F5
```

This opens:

```bash id="u9r4mc"
Extension Development Host
```

---

# Step 2 — Right Click Explorer

Inside VS Code Explorer:

```bash id="k3x8pb"
Right Click → Express BoilerPlate with Simple
```

or

```bash id="t6n1ya"
Right Click → Express BoilerPlate with simple crud functionality
```

---

# Step 3 — Boilerplate Generation

The extension automatically creates:

* Public folder
* CRUD HTML
* Routes
* Express setup
* API structure
* Server initialization

---

# 🔄 CRUD Route Generation Flow

When CRUD boilerplate is generated:

## 1. Create `V1` Folder

```bash id="r5m9zx"
V1/
```

---

## 2. Create Route Files

```bash id="y2q7nv"
routes.js
end-points.js
```

---

## 3. Update `app.js`

Automatically register routes:

```js id="c8f4td"
app.use("/V1", V1Router);
```

---

## 4. Check Existing Imports

Developer should verify:

* Duplicate imports
* Existing middleware
* Existing route registrations

---

# 📁 Important Files

| File            | Purpose                   |
| --------------- | ------------------------- |
| `extension.js`  | Main extension entry      |
| `app.js`        | Express application setup |
| `server.js`     | Server startup            |
| `routes.js`     | Route registration        |
| `end-points.js` | CRUD endpoints            |
| `crud.html`     | CRUD frontend UI          |

---

# ⚡ Developer Shortcuts

| Shortcut           | Purpose               |
| ------------------ | --------------------- |
| `F5`               | Run extension         |
| `Ctrl + Shift + P` | Open command palette  |
| `Ctrl + ``         | Open terminal         |
| `Ctrl + R`         | Reload VS Code window |

---

# 🧠 Development Notes

* Keep generated code modular
* Avoid duplicate route injection
* Validate existing `app.js`
* Maintain API version structure
* Keep CRUD templates lightweight
* Prefer reusable utility functions

---

# 🚀 Future Improvements

Planned features:

* MongoDB boilerplate generation
* Authentication starter templates
* RBAC structure generation
* Swagger integration
* Environment auto-detection
* AI-assisted project scaffolding

---

# 🧪 Testing Guide

## Run Extension

```bash id="w7n3qa"
npm install
npm run lint
```

---

## Start Extension Host

```bash id="d9v2pk"
F5
```

---

## Validate Generated Project

Check:

* `app.js`
* `routes.js`
* CRUD HTML generation
* Route registration
* Public folder structure

---

# 🧠 Technologies Used

* Node.js
* Express.js
* JavaScript
* HTML5
* VS Code Extension API

---

# 👨‍💻 Maintainer

Developed by **KeshavSoft**