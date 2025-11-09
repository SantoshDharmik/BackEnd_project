# 🎓 Engineering College Finder API

A **Node.js + Express + MongoDB** backend that lets users **search, filter, and manage B.Tech colleges** by location, branch, fees, duration, and affiliation.

---

## 🚀 About the Project

This project is a backend API designed to simplify how users find engineering colleges.  
It provides powerful **filtering, search, and management features** for college data using **Express.js** and **MongoDB**.

> Currently, I’m working on enhancing this project as part of my **Full Stack MERN Developer** journey.

---

## ⚙️ Features

✅ **Filter & Search APIs** – Users can search colleges by city, course, duration, and status  
✅ **Dynamic Query Handling** – Built flexible filtering logic using Express query parameters  
✅ **RESTful API Architecture** – Clean and modular routes & controllers for scalability  
✅ **CRUD Operations** – Add, update, and manage college data seamlessly  
✅ **Error Handling** – Proper input validation and structured responses for better reliability  

---

## 🧠 What I Learned

- Structuring scalable **Express.js** applications  
- Creating modular **routes** and **controllers**  
- Writing dynamic MongoDB queries  
- Using **Postman** for API testing & debugging  
- Handling **exceptions** and **data validation** effectively  

---

## 🧩 Tech Stack

| Technology | Description |
|-------------|-------------|
| 🟢 **Node.js** | JavaScript runtime environment |
| ⚡ **Express.js** | Web application framework |
| 🍃 **MongoDB** | NoSQL database |
| 🧰 **Mongoose** | ODM for MongoDB |
| 🧪 **Postman** | API testing tool |

---

## 📂 Project Structure

backend_project/
├── controllers/

│ ├── collegeController.js
├── routes/

│ ├── collegeRoutes.js
├── models/

│ ├── collegeModel.js
├── server.js

├── package.json

└── README.md


---

## 🧭 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/colleges` | Get all colleges |
| `GET` | `/api/colleges/filter` | Filter colleges by city, branch, duration, or status |
| `GET` | `/api/colleges/:id` | Get a single college by ID |
| `POST` | `/api/colleges` | Add a new college |
| `PUT` | `/api/colleges/:id` | Update college details |
| `DELETE` | `/api/colleges/:id` | Delete a college |

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/engineering-college-finder-api.git

# Navigate to project folder
cd engineering-college-finder-api

# Install dependencies
npm install

# Start the server
npm start

Server will run on:
👉 http://localhost:4007

💡 Future Enhancements

Integrate React frontend for complete MERN application

Add user authentication (JWT) for secure access

Implement pagination and sorting for large data sets

Deploy on Render / Vercel / Railway

🤝 Connect With Me

💼 [LinkedIn](https://www.linkedin.com/in/santosh-dharmik1728/)  
💻 [GitHub](https://github.com/SantoshDharmik)


🔖 Hashtags

#NodeJS #ExpressJS #MongoDB #BackendDevelopment #RESTAPI #MERNStack #WebDevelopment #SoftwareEngineering #OpenSource #APIDevelopment #JavaScript #LearningByBuilding
