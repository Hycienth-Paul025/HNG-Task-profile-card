# 🪄 Frontend Wizards — Stage 0 Task: Testable Profile Card

Welcome to my Stage 0 submission for the **Frontend Wizards** program!  
This project implements a fully **accessible**, **responsive**, and **testable Profile Card** built using **semantic HTML**, **modern CSS (Flexbox/Grid)**, and **vanilla JavaScript** — no frameworks.

---

## ✨ Project Overview

The goal of this project is to create a **Profile Card component/page** that:
- Displays a user’s basic information.
- Uses **semantic HTML** for structure and accessibility.
- Includes `data-testid` attributes for automated testing.
- Updates the current time in **milliseconds** dynamically using JavaScript.
- Works beautifully across **mobile, tablet, and desktop** screens.

---

## 🧱 Tech Stack

- **HTML5** (semantic structure)
- **CSS3** (Flexbox for layout, responsive design)
- **JavaScript (ES6)** (for dynamic time update)

---

## 🧩 Features

✅ Semantic and accessible HTML  
✅ Live current time using `Date.now()`  
✅ Responsive layout for all screen sizes  
✅ Alt text for images and visible keyboard focus styles  
✅ Social links that open in new tabs with `rel="noopener noreferrer"`  
✅ Automated-test ready with all required `data-testid` attributes  

---

## 🧠 Semantic Structure

| Section | Tag Used | Description |
|----------|-----------|-------------|
| Profile Card Container | `<article>` | Wraps the whole profile card |
| Header (Name) | `<header>` / `<h2>` | User’s name |
| Bio | `<p>` | Short biography text |
| Avatar | `<figure>` / `<img>` | Profile image with alt text |
| Social Links | `<nav>` / `<ul>` | List of social media links |
| Hobbies | `<section>` / `<ul>` | List of hobbies |
| Dislikes | `<section>` / `<ul>` | List of dislikes |

---

## 🕒 Dynamic Time Logic

The project displays the **current time in milliseconds** using:
```js
document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();
# 🪄 Frontend Wizards — Stage 0 Task: Testable Profile Card

Welcome to my Stage 0 submission for the **Frontend Wizards** program!  
This project implements a fully **accessible**, **responsive**, and **testable Profile Card** built using **semantic HTML**, **modern CSS (Flexbox/Grid)**, and **vanilla JavaScript** — no frameworks.

---

## ✨ Project Overview

The goal of this project is to create a **Profile Card component/page** that:
- Displays a user’s basic information.
- Uses **semantic HTML** for structure and accessibility.
- Includes `data-testid` attributes for automated testing.
- Updates the current time in **milliseconds** dynamically using JavaScript.
- Works beautifully across **mobile, tablet, and desktop** screens.

---

## 🧱 Tech Stack

- **HTML5** (semantic structure)
- **CSS3** (Flexbox for layout, responsive design)
- **JavaScript (ES6)** (for dynamic time update)

---

## 🧩 Features

✅ Semantic and accessible HTML  
✅ Live current time using `Date.now()`  
✅ Responsive layout for all screen sizes  
✅ Alt text for images and visible keyboard focus styles  
✅ Social links that open in new tabs with `rel="noopener noreferrer"`  
✅ Automated-test ready with all required `data-testid` attributes  

---

## 🧠 Semantic Structure

| Section | Tag Used | Description |
|----------|-----------|-------------|
| Profile Card Container | `<article>` | Wraps the whole profile card |
| Header (Name) | `<header>` / `<h2>` | User’s name |
| Bio | `<p>` | Short biography text |
| Avatar | `<figure>` / `<img>` | Profile image with alt text |
| Social Links | `<nav>` / `<ul>` | List of social media links |
| Hobbies | `<section>` / `<ul>` | List of hobbies |
| Dislikes | `<section>` / `<ul>` | List of dislikes |

---

## 🕒 Dynamic Time Logic

The project displays the **current time in milliseconds** using:
```js
document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();
