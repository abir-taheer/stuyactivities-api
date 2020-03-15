const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const expressSession = require("express-session");
const database = require("./database/models");
const SequelizeConnectSession = require('connect-session-sequelize')(expressSession.Store);
const sequelizeStore = new SequelizeConnectSession({db: database.sequelize});
const cors = require("cors");

app.use(cookieParser(process.env.SESSION_SECRET || "some_secret"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const whitelist = ["https://stuyactivities.org", 'http://localhost:3000'];
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin)) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	credentials: true
};

app.use(cors(corsOptions));

const sessionOptions = {
	secret: process.env.SESSION_SECRET || "some_secret",
	name: "session",
	resave: true,
	saveUninitialized: false,
	store: sequelizeStore,
	cookie: {
		path: '/',
		httpOnly: true,
		maxAge: Number(process.env.SESSION_MAX_AGE) || (15 * 86400 * 1000),
	},
	rolling: true
};

sequelizeStore.sync();

app.use(expressSession(sessionOptions));

app.use("/api", require("./api"));

app.listen(port, () => console.log("Listening on port " + port));
