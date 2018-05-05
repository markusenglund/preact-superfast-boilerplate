import express from "express";
import compression from "compression";
import helmet from "helmet";
import favicon from "serve-favicon";
import logger from "morgan";
import dotenv from "dotenv";
import renderPage from "./renderPage";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(helmet());
app.use(logger("tiny"));
app.use(compression());
app.use(favicon("dist/public/favicons/favicon.ico"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// aggressive cache static assets (1 year)
app.use("/static", express.static("dist/public", { maxAge: "1y" }));

app.get("*", renderPage);

const port = process.env.PORT || "1337";
/* eslint-disable no-console */
app.listen(port, () => console.log(`Server listening on port ${port}`));
