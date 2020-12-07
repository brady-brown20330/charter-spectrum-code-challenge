const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.get('./endpoint', )


app.listen(PORT, () => {
  console.log(`Hello, Your server is running on PORT: ${PORT}`);
});

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));