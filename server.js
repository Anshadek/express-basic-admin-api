// server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/todos', require('./routes/todo.routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
