const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample route for game API
app.get('/api/games', (req, res) => {
    res.json({ message: 'List of games will be here' });
});

app.post('/api/games', (req, res) => {
    const newGame = req.body;
    // Logic to save new game
    res.status(201).json({ message: 'Game created', game: newGame });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});