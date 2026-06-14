import express from 'express';
 // Load environment variables from .env file

import { ENV } from './lib/env.js';

const app = express();

console.log(ENV.PORT); // Accessing the PORT variable from .env
console.log(ENV.DB_URL); // Accessing the DB_URL variable from .env

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is healthy" });
});

app.listen(ENV.PORT, () => console.log("Server is running on port " , ENV.PORT));