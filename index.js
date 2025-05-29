const express = require('express');
const app = express();
const PORT = 3000;
// Import items from another folder

// Middleware to parse JSON
app.use(express.json());

// In-memory data store
let items = [
    {
        "id": "1",
        "name": "Item One",
        "description": "Description for item one."
    },
    {
        "id": "2",
        "name": "Item Two",
        "description": "Description for item two."
    },
    {
        "id": "3",
        "name": "Item Three",
        "description": "Description for item three."
    },
    {
        "id": "4",
        "name": "Item Four",
        "description": "Description for item four."
    },
    {
        "id": "5",
        "name": "Item Five",
        "description": "Description for item five."
    },
    {
        "id": "6",
        "name": "Item Six",
        "description": "Description for item six."
    },
    {
        "id": "7",
        "name": "Item Seven",
        "description": "Description for item seven."
    },
    {
        "id": "8",
        "name": "Item Eight",
        "description": "Description for item eight."
    },
    {
        "id": "9",
        "name": "Item Nine",
        "description": "Description for item nine."
    },
    {
        "id": "10",
        "name": "Item Ten",
        "description": "Description for item ten."
    }
];


// Home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// Create new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const newItem = { id: currentId++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  items[itemIndex] = { id, name, description };
  res.json(items[itemIndex]);
});

// Delete item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json({ message: 'Item deleted', item: deletedItem[0] });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
