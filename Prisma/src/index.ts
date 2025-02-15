import { PrismaClient } from "@prisma/client"
import express, { Express } from "express";
import bcrypt from "bcrypt";

const client = new  PrismaClient();
const app: Express = express();

app.use(express.json());

// gets the user details for all the users present
app.get("/users", async (req, res) => {
    const users = await client.user.findMany(); 

    console.log("Retrieved All Users Successfully!");
    res.json({
        userData: users
    });
});

// gets the todo details for a specific user
app.get("/users/:id", async (req, res) => {
    const userId: number = parseInt(req.params.id);

    const userData = await client.user.findFirst({
        where: {
            id: userId
        },
        include: {
            todo: true
        }
    });

    console.log("Retrieved User Data Successfully");
    res.json({
        userData: userData
    });
});

app.post("/createuser", async (req, res) => {
    console.log("Recieved request body!", req.body);
    const { username, password, age, city } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    await client.user.create({
        data: {
            username: username,
            password: hashedPassword,
            age: age,
            city: city
        }
    });
    console.log("Data Inserted Successfully");

    res.status(201).json({
        message: "User Create Succesfully!"
    });
});

app.delete("/deleteuser/:id", async (req, res) => {
    const userId: number = parseInt(req.params.id);

    await client.user.delete({
        where: {
            id: userId
        }
    });
    console.log(`User with ID ${userId} Deleted`)
});

app.put("/updateuser/:id", async (req, res) => {
    const userId: number = parseInt(req.params.id);
    const {parameter, value} = req.body;

    const response = await client.user.update({
        where: {
            id: userId
        }, 
        data: {
            [parameter]: value
        }
    });

    console.log("User Data Updated Successfully");
    res.json({
        status: "Data Updated"
    });
});

app.listen(3000, () => {
    console.log("Server started on PORT 3000");
});