const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const db = require("./DB");
const passport = require("passport");
const passportFunc = require("./config/passport");
const path = require("path");

const registerRouter = require("./api/register/register_router");
const usersRouter = require("./api/users/users_router");
const postsRouter = require("./api/posts/posts_router");
const downloadsRouter = require("./api/downloads/downloads_router");

const app = express();
const PORT = process.env.PORT || 4201;

app.set("trust proxy", true);

app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use(passport.initialize());

app.use("/register", registerRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/files", downloadsRouter);

db.on("error", () => {
    console.log(chalk.red("Connection error"));
});

app.listen(PORT, () => {
    console.log(
        `${chalk.green("memories")} ${chalk.yellow(
      "live and up on port"
    )} ${chalk.red(PORT)}`
    );
});


if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../client/build")));
    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}