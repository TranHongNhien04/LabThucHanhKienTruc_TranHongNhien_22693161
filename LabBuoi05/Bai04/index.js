const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Nhiên nè");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});