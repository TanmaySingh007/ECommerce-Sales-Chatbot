# ECommerce-Sales-Chatbot
A full-stack AI-powered Sales Chatbot designed as a case study to demonstrate the development of an intelligent conversational assistant for e-commerce platforms. This project showcases a complete pipeline — from intuitive frontend UI to a Python-based backend server with a mock inventory — built to simulate a real-world.
📌 Case Study Overview
In the competitive domain of online retail, effective customer engagement is key. This project aims to develop an interactive chatbot that enhances the online shopping journey — from product discovery to purchase — using a modern tech stack and conversational interface.

The chatbot is tailored for an e-commerce platform specializing in a specific product category (e.g., books, electronics, or clothing), enabling smooth interaction, real-time responses, and data-driven suggestions.

📌 Project Overview

🛠️ Tech Stack

🚀 Features

🧩 Folder Structure

🔧 Setup & Installation

▶️ How to Run

📝 Future Enhancements

👨‍💻 Author & Links

markdown
Copy
Edit
# 🛍️ E-Commerce Sales Chatbot

An intelligent chatbot built to simulate a complete e-commerce experience — from browsing products to placing mock orders — all through a friendly conversational interface.

Live Demo: [Click Here](https://e-commerce-sales-chatbot-i0yd4isx9.vercel.app/)  
GitHub Repo: [TanmaySingh007/ECommerce-Sales-Chatbot](https://github.com/TanmaySingh007/ECommerce-Sales-Chatbot)

---

## 📌 Project Overview

This chatbot simulates a digital shopping assistant, allowing users to:
- Explore product categories
- Search and filter items
- View product details
- Place mock orders conversationally

Built using **Python Flask** for backend processing and **HTML/CSS/JavaScript** for an interactive, responsive frontend. It is ideal for businesses looking to automate and simplify the product discovery and purchase funnel using chat interfaces.

---

## 🛠️ Tech Stack

**Frontend:**  
- HTML5  
- CSS3  
- JavaScript  
- Jinja2 (templating)

**Backend:**  
- Python 3.11  
- Flask  
- SQLite (mock product database)  

**Deployment & Tools:**  
- Vercel (Frontend Deployment)  
- GitHub  
- VS Code

---

## 🚀 Key Features

- 💬 Chat-based interaction for navigating products
- 🔍 Search and filter functionalities (by category, keyword, or price)
- 🛒 Simulated cart and order placement system
- 📱 Responsive UI (Mobile + Desktop optimized)
- 💾 Mock database with sample inventory

---

## 🧩 Folder Structure

ECommerce-Sales-Chatbot/
│
├── static/ # CSS, JS, Images
│ ├── css/
│ └── js/
│
├── templates/ # HTML (Jinja2) Templates
│ └── index.html
│ └── chat.html
│
├── database/ # SQLite DB (mock data)
│ └── products.db
│
├── app.py # Main Flask app
├── requirements.txt # Dependencies
└── README.md # Project Info

yaml
Copy
Edit

---

## 🔧 Setup & Installation

### 1. Clone the Repo

```bash
git clone https://github.com/TanmaySingh007/ECommerce-Sales-Chatbot.git
cd ECommerce-Sales-Chatbot
2. Create a Virtual Environment
bash
Copy
Edit
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
3. Install Dependencies
bash
Copy
Edit
pip install -r requirements.txt
4. Run the App
bash
Copy
Edit
python app.py
Visit http://127.0.0.1:5000 in your browser.

▶️ Demo Video (optional)
If available, you can embed or link to a walkthrough video.

📝 Future Enhancements
✅ Integrate payment gateway APIs (Razorpay/Stripe)

✅ Add authentication & order history

✅ Use NLP models (like Dialogflow or Rasa) for smarter conversations

✅ Migrate to PostgreSQL for production-grade DB

👨‍💻 Author
Tanmay Singh
LinkedIn • GitHub

If you found this project helpful, feel free to ⭐️ the repo!

📜 License
This project is licensed under the MIT License. See LICENSE file for details.
