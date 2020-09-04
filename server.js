const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(adminRoutes);
app.use(homeRoutes);

// Not found page
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
