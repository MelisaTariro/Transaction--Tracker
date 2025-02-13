const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: '*', // Allow all origins (for testing)
    methods: ['GET', 'POST'],
}));

app.use(express.json());

let transactions = [];

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "test" && password === "password") {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.get("/transactions", (req, res) => {
    res.json(transactions);
});

app.post("/transactions", (req, res) => {
    transactions.push(req.body);
    res.json({ success: true });
});

// Use your computer's actual IP
app.listen(3001, '172.20.10.2', () => {
    console.log('Server is running on http://172.20.10.2:3001');
});

