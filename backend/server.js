require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRouter = require('./routes/posts');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON request body

// Routes
app.use('/api/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('MERN Blog API running 🚀');
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
.catch(err => console.error('❌ Mongo connection error:', err));
