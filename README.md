# 🚀 Learning JavaScript

[![JavaScript CI](https://github.com/Umang0210/Learning-Javascript/actions/workflows/ci.yml/badge.svg)](https://github.com/Umang0210/Learning-Javascript/actions/workflows/ci.yml)

A comprehensive collection of JavaScript practice files covering fundamental to advanced concepts. This repository serves as a hands-on learning resource for anyone starting their JavaScript journey.

## 📋 Table of Contents

- [About](#about)
- [Topics Covered](#topics-covered)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Code Quality & CI](#code-quality--ci)
- [Learning Path](#learning-path)
- [Contributing](#contributing)

## 💡 About

This repository contains **many practical JavaScript files** that demonstrate core programming concepts through real-world examples. Each file focuses on specific JavaScript features and best practices, making it easy to learn and reference.

## 🎯 Topics Covered

### **Fundamentals**
- ✅ Variables and Data Types
- ✅ String Interpolation and Template Literals
- ✅ Console Output Methods

### **Operators**
- ✅ Arithmetic Operators (`+`, `-`, `*`, `/`, `%`, `**`)
- ✅ Comparison Operators (`>`, `<`, `==`, `===`, `!=`)
- ✅ Logical Operators (`&&`, `||`, `!`)

### **Control Flow**
- ✅ While Loops
- ✅ Break and Continue Statements
- ✅ Conditional Logic

### **Functions**
- ✅ Function Declarations
- ✅ Function Expressions
- ✅ Arrow Functions
- ✅ Return Statements and Parameters

### **Array Methods**
- ✅ `forEach()`
- ✅ `filter()`
- ✅ `find()`
- ✅ Array Manipulation

### **Practical Applications**
- ✅ Shopping Cart Implementation
- ✅ E-commerce Product Filtering
- ✅ Order Management System
- ✅ Quantity Increment/Decrement Logic
- ✅ Total Calculation Functions

## 🏁 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended) - [Download here](https://nodejs.org/)
- A code editor like **VS Code**, **Sublime Text**, or **Atom**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Umang0210/Learning-Javascript.git
   cd Learning-Javascript
   ```

2. **Run any file:**
   ```bash
   node file1.js
   ```

## 🎓 How to Use

Each file is designed to be **standalone** and can be executed independently:

```bash
# Example: Run the Hello World program
node file1.js

# Example: Test the shopping cart system
node file22.js

# Example: Practice array filtering
node file20.js
```

### Tips for Learning:
1. **Read the code comments** - They provide context and explanations
2. **Modify and experiment** - Change values and see what happens
3. **Run frequently** - Execute files after making changes
4. **Build progressively** - Start from `file1.js` and work your way up

## ✅ Code Quality & CI

This folder includes npm scripts and a GitHub Actions pipeline for automated checks.

### Local checks

```bash
# Install dependencies
npm install

# Syntax validation (cross-platform; checks all .js and ,js files)
npm run validate

# ESLint checks
npm run lint
```

### CI pipeline

- Workflow file: `.github/workflows/ci.yml`
- Runs on pushes and pull requests to `main`/`master` (and supports manual `workflow_dispatch`)
- Performs:
   - Dependency install (`npm ci`)
   - Syntax check for JavaScript files
   - ESLint linting

## 🛤️ Learning Path

### **Beginner Level** (Start Here)
```
file1.js → file3.js → file5.js → file7.js
```
*Focus: Variables, operators, loops, and basic functions*

### **Intermediate Level**
```
file10.js → file12.js → file15.js → file18.js
```
*Focus: Arrow functions, objects, spread operator, and array methods*

### **Advanced Level** (Projects)
```
file20.js → file22.js
```
*Focus: Complete applications with filtering, cart management, and order processing*

## 🤝 Contributing

Contributions are welcome! If you'd like to add more examples or improve existing ones:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewExample`)
3. Commit your changes (`git commit -m 'Add new example for [topic]'`)
4. Push to the branch (`git push origin feature/NewExample`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 📧 Contact

**Umang** - [GitHub Profile](https://github.com/Umang0210)

---

**Happy Coding! 💻✨**

*If you find this repository helpful, please consider giving it a ⭐ on GitHub!*
