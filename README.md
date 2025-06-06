# 🛍️ E-Commerce Sales Chatbot

An intelligent chatbot that simulates a complete e-commerce shopping experience using a conversational interface. Built with Python (Flask) and JavaScript, it allows users to browse products, filter by categories or price, and simulate placing orders — all via a chat-like UI.

🚀 [Live Demo](https://e-commerce-sales-chatbot-i0yd4isx9.vercel.app/)  
🔗 [GitHub Repository](https://github.com/TanmaySingh007/ECommerce-Sales-Chatbot)

---

## 📌 Features

- 💬 Chat-based interaction for seamless UX
- 🔍 Product filtering by keyword, category, and price
- 🛒 Mock order placement and cart simulation
- 📱 Mobile-responsive design
- 💾 SQLite database with sample inventory

---

## 🛠️ Tech Stack

**Frontend:**  
- HTML, CSS, JavaScript  
- Jinja2 (template engine)

**Backend:**  
- Python 3.11  
- Flask  
- SQLite  

**Deployment:**  
- Vercel (frontend)  
- GitHub (version control)

---

## 🧩 Project Structure

```
ECommerce-Sales-Chatbot/
│
├── static/               # CSS, JS, images
├── templates/            # Jinja2 HTML templates
├── database/             # SQLite DB with mock product data
├── app.py                # Main Flask application
├── requirements.txt      # Python dependencies
└── README.md             # Project overview
```

---

## 🔧 Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/TanmaySingh007/ECommerce-Sales-Chatbot.git
cd ECommerce-Sales-Chatbot
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python app.py
```

Visit `http://127.0.0.1:5000` in your browser to interact with the chatbot.

---

## 📊 Sample Queries

- "Show me all electronics"
- "Search for shoes under 1000"
- "Add iPhone 13 to cart"
- "Checkout"

---

## 📜 License

This project is licensed under the MIT License.

---
| **Challenge**                      | **Description**                                                                                                 | **Solution Implemented**                                                                                                                        |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Natural Language Parsing**       | Interpreting varied user inputs like “phones under 5000” or “show books” required flexible keyword recognition. | Implemented basic keyword-based matching using `if` conditions and regex; future scope includes NLP integration using spaCy or Rasa.            |
| **Database Querying**              | Creating real-time filtered responses based on price, category, or product keywords.                            | Designed efficient SQL queries with `LIKE`, `BETWEEN`, and category filters on SQLite tables.                                                   |
| **UI Responsiveness**              | Ensuring that the chatbot looked clean and functional on mobile, tablet, and desktop.                           | Used media queries in CSS and flexible layout units (%, vw, vh) to optimize for multiple screen sizes.                                          |
| **State Handling in Chatbot Flow** | Simulating cart memory and transitioning from one state (e.g., browsing) to another (e.g., ordering) smoothly.  | Created simple in-memory session variables and flags in Python Flask to track conversation states.                                              |
| **Deployment Integration**         | Deploying a Flask backend with a responsive frontend on Vercel, which is frontend-first.                        | Deployed frontend on Vercel and simulated backend locally; noted in README that backend can be hosted on Render or Railway for full deployment. |

## 👨‍💻 Author

**Tanmay Singh**  
📧 tanmaysingh08580@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/tanmay-singh-228097272/) | [GitHub](https://github.com/TanmaySingh007)

If you find this project useful, feel free to ⭐️ the repository!
