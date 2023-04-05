const express = require("express");

const app = express();

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `[APP] Application is running on port ${process.env.PORT || 4000}...`
  );
});
