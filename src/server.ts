import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ hello: "world" }));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));
