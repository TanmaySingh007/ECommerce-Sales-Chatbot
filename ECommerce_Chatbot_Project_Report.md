# 📘 Project Report: E-Commerce Sales Chatbot  
**By:** Tanmay Singh  
**GitHub:** [TanmaySingh007/ECommerce-Sales-Chatbot](https://github.com/TanmaySingh007/ECommerce-Sales-Chatbot)  
**Live Demo:** [Chatbot Web App](https://e-commerce-sales-chatbot-i0yd4isx9.vercel.app/)

---

## ✅ 1. Project Overview

This project focuses on building an **E-commerce Sales Chatbot** that assists users in discovering and interacting with products through natural language inputs. The chatbot acts as a virtual shopping assistant that enhances user engagement and simplifies product exploration and purchase simulation.

---

## 💡 2. Objectives

- Enable customers to interact with an e-commerce platform via a conversational interface.
- Provide seamless product browsing, filtering, and order placement.
- Simulate end-to-end e-commerce functionality in a lightweight, intuitive UI.
- Showcase modular and deployable chatbot architecture.

---

## ⚙️ 3. Technology Stack

### 💻 Frontend:
- **HTML5**: For structuring pages
- **CSS3**: Styling and layout
- **JavaScript**: Client-side scripting and chatbot interactivity
- **Jinja2**: Template rendering engine used with Flask

### 🧠 Backend:
- **Python 3.11**: Core backend logic
- **Flask**: Microframework for routing, server setup, and APIs
- **SQLite**: Lightweight database to store product information
- **Jinja2**: Template system integrated with Flask

### 🧪 Tools & Deployment:
- **GitHub**: Version control and project hosting
- **Vercel**: Deployment platform for frontend hosting
- **VS Code**: Development IDE

---

## 🗃️ 4. System Architecture

```
User Interface (Browser)
        |
    JavaScript Chat UI
        |
     Flask API (app.py)
        |
    SQLite Database (products.db)
        |
    HTML Templates (Jinja2)
```

---

## 🧑‍💬 5. Sample Queries & Conversations

| **User Query**                          | **Chatbot Response**                                                                 |
|----------------------------------------|--------------------------------------------------------------------------------------|
| "Show me all books"                    | Lists products in the "Books" category with names, prices, and links.               |
| "Do you have any electronics under 500?" | Filters and shows electronics priced below ₹500.                                    |
| "Add iPhone 13 to cart"                | Confirms selection and adds the product to cart (simulated).                        |
| "Checkout"                             | Responds with total order summary and confirms (mock) order placement.              |
| "Search for wireless headphones"       | Returns matching items using keyword-based search from SQLite DB.                   |

---

## 📊 6. Results and Observations

- 💬 The chatbot responds instantly via JavaScript DOM updates, enhancing UX.
- 📱 Responsive UI ensures accessibility across desktops, tablets, and smartphones.
- 🔍 Product filters using keywords and categories yield accurate results from a mock SQLite database.
- 🛒 Users can simulate entire purchase flow from search → cart → checkout without leaving chat.
- 🧪 Performance tested across multiple devices and browsers — stable behavior noted.

---

## 🔚 7. Conclusion & Learnings

The E-commerce Sales Chatbot successfully replicates the core functionalities of a shopping assistant in a conversational manner. It demonstrates:

- The power of combining Flask, SQLite, and frontend scripting for lightweight applications.
- Efficient rendering and user engagement via chat-style interfaces.
- Hands-on experience in integrating full-stack components from database to deployment.

### 🔍 Key Learnings:
- End-to-end full stack deployment process
- Chatbot conversation design
- Real-time filtering and database querying
- Frontend-backend integration using Flask and Jinja2
- Hosting frontend using Vercel