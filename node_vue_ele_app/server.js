const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

const users = require("./routes/api/users"); 
const profiles = require("./routes/api/profiles.js");


//db config
const db = require("./config/keys").mongoURI

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect to mongodb
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// app.get("/", (req, res) => {
//     res.send("hello world")
// })

//passport 初始化
app.use(passport.initialize());

require("./config/passport")(passport);

//使用routes 
app.use("/api/users", users);
app.use("/api/profiles",profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
}) 