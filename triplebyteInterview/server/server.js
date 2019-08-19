
const express = require('express');
const path = require('path');
const app = express();

app.get('/testDev', (req, res) => {
  res.send({ dev: 'testDev endpoint hit' });
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(8080, () => {
  console.log('listening on port 8080');
}); //listens on port 8080 -> http://localhost:8080/
