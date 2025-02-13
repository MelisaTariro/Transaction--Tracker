Transaction Tracker App 📱💰
Overview
The Transaction Tracker is a mobile application built with React Native (Expo) that allows users to:

Log in with a username and password.
View a list of transactions.
Add new transactions.
The app communicates with a Node.js & Express backend to store and retrieve transaction data.

Tech Stack
Frontend (Mobile App)
React Native (Expo)
React Navigation
Axios (for API requests)
Backend (Server)
Node.js
Express.js
CORS (Cross-Origin Resource Sharing)
Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/MelisaTariro/Transaction--Tracker.git
cd TransactionTracker
2️⃣ Install Dependencies
Frontend (React Native)


npm install
Backend (Node.js Server)
cd Backend
Running the App
1️⃣ Start the Backend Server

node server.js
Ensure your backend is running on http://<your-computer-ip>:3001.

2️⃣ Start the Mobile App

cd TransactionTracker
npx expo start
If using an iPhone, scan the QR code with the Expo Go app.
If using an Android, scan the QR code or run expo run:android.

API Endpoints
1️⃣ Login
Endpoint: POST /login
Request Body:
{
  "username": "test",
  "password": "password"
}
Response:


{
  "success": true
}
2️⃣ Fetch Transactions
Endpoint: GET /transactions
Response Example:


[
  {
    "date": "2025-02-13",
    "amount": "100",
    "description": "Groceries"
  }
]
3️⃣ Add a Transaction
Endpoint: POST /transactions
Request Body:


{
  "date": "2025-02-13",
  "amount": "100",
  "description": "Groceries"
}
Response:


{
  "success": true
}
Troubleshooting
🛑 Common Issues & Fixes
Expo App Unable to Connect to Backend

Make sure you replaced localhost with your computer’s IP address in API requests.
Find your IP with:

ipconfig (Windows) / ifconfig (Mac)
Update your API calls:

axios.post('http://<your-ip>:3001/login', { username, password });
Port 3001 Already in Use

Stop any existing process using:
npx kill-port 3001
CORS Errors

Modify server.js to allow requests from any origin:

app.use(cors({ origin: '*' }));

Contributors
👤MelisaTariro
📧 kapimbitariro@gmail.com
🔗 GitHub Profile
