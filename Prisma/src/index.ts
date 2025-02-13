import { PrismaClient } from "@prisma/client"

const client = new  PrismaClient();


async function createUser() {
    await client.user.create({
        data: {
            username: "akshay.jain",
            password: "123123",
            age: 25,
            city: "San Francisco"
        }
    });
    console.log("Data Inserted in the DB!");
}

async function deleteUser() {
    await client.user.delete({
        where: {
            id: 3
        }
    });
    console.log("Data Deleted from the DB!");
}

async function updateUser() {
    await client.user.update({
        where: {
            id: 1
        },
        data: {
            city: "Madrid"
        }
    });
    console.log("Data Updated of the DB!");
}

async function readUser() {
    const data = await client.user.findFirst({
        where: {
            id: 2
        }
    });
    console.log("Data Extracted from the DB!");
    console.log(data);
}

// createUser();
// deleteUser();
// updateUser();
readUser();