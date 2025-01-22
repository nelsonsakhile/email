const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", require("./routes/email"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});