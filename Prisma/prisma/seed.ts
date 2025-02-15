import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUsers() {
    await client.user.create({
        data: {
            username: "Cristiano.Ronaldo",
            password: "CR7istheBest",
            age: 40,
            city: "Madeira",
            todo: {
                create: {
                    description: "Go to Gym",
                    title: "Regularly Going to the Gym",
                    done: false,
                }
            }
        }
    });
}

createDummyUsers();