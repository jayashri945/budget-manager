const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let budget = [];

app.get('/api/budget', (req, res) => {
  res.json(budget);
});

app.post('/api/budget', (req, res) => {
  budget.push(req.body);
  res.json({ message: 'Added' });
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
