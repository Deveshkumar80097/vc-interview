import express from 'express';
 // Load environment variables from .env file
import path from 'path';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';

const app = express();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is healthy" });
});

app.get("/books", (req, res) => {
    res.status(200).json({ msg: "this is a books endpoint" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}


const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("Server is running in", ENV.PORT);
        });
    } catch (error) {
        console.error(" Error starting server:", error);
    }
};

startServer();
