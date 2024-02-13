const express = require("express");
const { testRouter } = require("./routes/test/testroute");
const app = express();

require("dotenv").config();

app.use(testRouter);

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(` server running in ${PORT} successfully`);
});
