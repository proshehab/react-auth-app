# 🚀 React + Laravel API Project

A full-stack web application built with **React.js (frontend)** and **Laravel (backend API)**.  
This project follows a clean structure with separate folders for the frontend and backend.

---

## 📂 Project Structure


---

## 🧭 Getting Started

Follow the steps below to set up and run the project locally.

---

## 🪣 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
⚙️ 2. Backend Setup (Laravel API)
📍 Go to the backend folder

cd backend
🧰 Install dependencies
composer install
🧾 Copy the environment file
cp .env.example .env
🔑 Generate app key
php artisan key:generate

⚙️ Configure your database

Edit the .env file and update these lines:
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

🗄️ Run migrations (if any)
php artisan migrate

💻 3. Frontend Setup (React.js)
cd ../frontend

📦 Install dependencies
npm install

🔧 Configure API base URL
VITE_API_BASE_URL=http://127.0.0.1:8000/api

▶️ Start React development server
npm run dev

