const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let budgetItems = [];

app.get('/api/budget', (req, res) => {
  res.json(budgetItems);
});

app.post('/api/budget', (req, res) => {
  const item = req.body;
  budgetItems.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
