const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let budgetItems = [];


app.get('/api/budget', (req, res) => {
  console.log('Sending items:', budgetItems);  // 🧪 Debug log
  res.json(budgetItems);
});


app.post('/api/budget', (req, res) => {
  const item = req.body;
  console.log('Received item:', item);  // 🧪 Debug log
  budgetItems.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
