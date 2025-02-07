import express, { Express } from "express";
import { Client } from "pg";

const app: Express = express();

app.use(express.json());

const pgClient  = new Client("postgresql://neondb_owner:npg_Bnu8y2vCZGMP@ep-rapid-voice-a55y22eh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

pgClient.connect();

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        // not using templated strings over here instead sending the query & values separately to DB to avoid SQL injections
        const insertQuery = `INSERT INTO Users (username, email, password) VALUES ($1, $2, $3);`;
        await pgClient.query(insertQuery, [username, email, password]);

        res.json({
            message: "You have signed up successfully!"
        });
    } catch(e) {
        console.log(e);
        res.json({
            message: "Some error occured while signing up!"
        });
    }
});

app.listen(3000, () => {
    console.log("Server started at PORT 3000");
}); 