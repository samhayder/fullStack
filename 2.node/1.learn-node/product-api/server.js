import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`server is http://localhost:${port}`);
});
