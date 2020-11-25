const express = require('express');
const app = express();


//server base
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server started on port - ${port}`)
})



