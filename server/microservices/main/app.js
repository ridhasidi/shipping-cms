if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const errorHandlers = require("./middlewares/errorHandler");
const router = require("./routers/index");
const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.use(errorHandlers);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
