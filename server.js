const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/html.js");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
