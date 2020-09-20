const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5600;
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
