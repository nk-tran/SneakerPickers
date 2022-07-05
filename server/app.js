require('dotenv').config()
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const local = require("./strategies/local");
const session = require("express-session");
const bodyParser = require("body-parser");
// const PORT = 3000;


// db connection
const db = require("./configs/db.config");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(
  session({
    secret: "cookie",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000000 },
  })
);
//using middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// directory for router
const listingRouter = require("./routes/listings");
const listingsfilterRouter = require("./routes/listingsfilter");
const authRouter = require("./routes/auth");
const logoutRouter = require("./routes/logout");
const profileRouter = require("./routes/profile");
const registerRouter = require("./routes/register");
const myListingsRouter = require("./routes/mylistings");
const listedItemOfferingRouter = require("./routes/listedItemOffering")
const addAListingRouter = require("./routes/addalisting")
const makeOfferRouter = require("./routes/makeoffer");
const offerListRouter = require("./routes/offerList")
const historyRouter = require("./routes/history.js")

//routes
app.use("/auth", authRouter);
app.use("/auth", logoutRouter);
app.use("/register", registerRouter(db));
app.use("/api", listingRouter(db));
app.use("/api", listingsfilterRouter(db));
app.use("/api", profileRouter(db));
app.use("/api", myListingsRouter(db));
app.use("/api", listedItemOfferingRouter(db));
app.use("/api", addAListingRouter(db));
app.use("/api", makeOfferRouter(db))
app.use("/api", offerListRouter(db))
app.use("/api", historyRouter(db))

module.exports = app;

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}!`);
// });