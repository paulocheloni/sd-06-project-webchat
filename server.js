const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const getDate = require('./utils/getMessagePrefix');

const publicPath = path.join(__dirname, '/public');

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('message', (message) => {
    console.log(message);
  });
});

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(cors());

app.use('/', express.static(publicPath));

app.get('/', (req, res) => {
  res.status(200).render('index');
});

http.listen(3000, () => {
  console.log('Server on port 3000');
});