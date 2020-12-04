const express = require('express');
const app = express();
const PORT = 3001;
const path = require("path");

app.get('./endpoint', )


app.listen(PORT, () => {
  console.log(`Hello, Scrumdog. Your server is running on PORT: ${PORT}`);
});

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));