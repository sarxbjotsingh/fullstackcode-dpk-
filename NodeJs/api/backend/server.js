const express = require("express");
const cors = require("cors"); // Import CORS

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());
// Middleware to parse JSON
app.use(express.json());
// Sample data
let users = [
 { id: 1, name: 'John Doe' },
 { id: 2, name: 'Jane Doe' }
];
// Routes
app.get('/', (req, res) => {
 res.send('Welcome to My API');
});
// Get all users
app.get('/users', (req, res) => {
 res.json(users);
});
// Get a single user by ID
app.get('/users/:id', (req, res) => {
 const user = users.find(u => u.id === parseInt(req.params.id));
 user ? res.json(user) : res.status(404).send('User not found');
});
// Create a new user
app.post('/users', (req, res) => {
 const newUser = { id: users.length + 1, name: req.body.name };
 users.push(newUser);
 res.status(201).json(newUser);
});
// Update a user
app.put('/users/:id', (req, res) => {
 const user = users.find(u => u.id === parseInt(req.params.id));
 if (!user) return res.status(404).send('User not found');
 user.name = req.body.name;
 res.json(user);
});
// Delete a user
app.delete('/users/:id', (req, res) => {
 users = users.filter(u => u.id !== parseInt(req.params.id));
 res.send('User deleted');
});
// Start the server
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});