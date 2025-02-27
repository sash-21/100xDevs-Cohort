import express, { Express, Request, Response } from "express";
import { Client } from "pg";

const app: Express = express();

app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_Bnu8y2vCZGMP@ep-rapid-voice-a55y22eh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

pgClient.connect();

app.post("/signup", async (req: Request, res: Response) => {
    const username: string = req.body.username;
    const email: string = req.body.email;
    const password: string = req.body.password;

    const city: string = req.body.city;
    const country: string = req.body.country;
    const street: string = req.body.street;
    const pincode: string = req.body.pincode;

    try {
        // not using templated strings over here instead sending the query & values separately to DB to avoid SQL injections
        const insertUsers = `INSERT INTO Users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertAddress = `INSERT INTO Addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

        await pgClient.query('BEGIN;'); // starting a transaction
        const response = await pgClient.query(insertUsers, [username, email, password]);
        const user_id = response.rows[0].id;
        await pgClient.query(insertAddress, [city, country, street, pincode, user_id]);
        await pgClient.query('COMMIT;');

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

app.get("/metadata", async (req: Request, res: Response) => {
    const id = req.query.id;

    const userQuery = `SELECT username, email FROM Users WHERE id=$1;`;
    const response1 = await pgClient.query(userQuery, [id]);

    const addressQuery = `SELECT * FROM Addresses WHERE user_id=$1;`;
    const response2 = await pgClient.query(addressQuery, [id]);

    res.json({
        user: response1.rows[0],
        address: response2.rows
    });
});

app.get("/betadata", async (req: Request, res: Response) => {
    const id = req.query.id;

    const dataQuery = `SELECT u.id, u.username, u.email, a.street, a.city, a.country, a.pincode FROM Users u JOIN Addresses a ON u.id = a.user_id WHERE u.id = $1;`;

    const response = await pgClient.query(dataQuery, [id]);

    res.json({
        userDetails: response.rows
    });
});

app.listen(3000, () => {
    console.log("Server started at PORT 3000");
}); 