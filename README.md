# KS Express Boilerplate

Create a ready-to-use Express.js boilerplate project directly from VS Code.

---

# Features

- Generate Express boilerplate instantly
- Simple project structure
- CRUD-ready template option
- Environment configuration included
- Config-based architecture
- Fast project bootstrap
- Built for Node.js + Express development

---

# Installation

## From VS Code Marketplace

Search:

```bash
ks-express-boilerplate
```

Publisher:

```bash
KeshavSoft
```

Install the extension.

---

# Usage

## Create Simple Boilerplate

### Step 1

Open or create an empty folder in VS Code.

---

### Step 2

Right click on Explorer.

---

### Step 3

Select:

```bash
Express BoilerPlate with simple
```

---

## Create CRUD Boilerplate

Right click on Explorer and select:

```bash
Express BoilerPlate with simple crud functionality
```

---

# Generated Structure

```bash
project
│
├── .vscode
├── Config
├── Public
├── .env
├── .env.local
├── app.js
├── config.json
├── configLoader.js
├── package.json
├── port.js
├── routes.js
└── server.js
```

---

# Included Files

| File | Purpose |
|---|---|
| app.js | Express app initialization |
| server.js | Server startup |
| routes.js | Main routes |
| configLoader.js | Config handling |
| port.js | Port configuration |
| .env | Environment variables |
| config.json | App configuration |

---

# Example Workflow

## 1. Create Boilerplate

Generate project from Explorer context menu.

---

## 2. Install Packages

```bash
npm install
```

---

## 3. Start Server

```bash
npm start
```

or

```bash
node server.js
```

---

# Requirements

- VS Code `^1.116.0`
- Node.js
- npm

---

# Extension Commands

| Command | Description |
|---|---|
| Express BoilerPlate with simple | Generate simple Express project |
| Express BoilerPlate with simple crud functionality | Generate CRUD-ready project |

---

# Development

## Clone Repository

```bash
git clone https://github.com/keshavsoft/ks-express-boilerplate.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Extension

Press:

```bash
F5
```

to open Extension Development Host.

---

# Package Extension

```bash
vsce package
```

---

# Publish Extension

```bash
vsce publish
```

---

# Repository

https://github.com/keshavsoft/ks-express-boilerplate

---

# Marketplace Keywords

```bash
express
nodejs
boilerplate
express boilerplate
express starter
crud boilerplate
node api
```

---

# Author

KeshavSoft

---

# License

MIT