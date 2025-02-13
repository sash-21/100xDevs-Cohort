# Prisma ORM:

1. ORMs stand for Object Relational Mapping, is a programming technique used in software development to convert data between incompatible type systems in object oriented programming languages.

2. ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects in the code.

3. In easier words ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL for example)

4. Benefits of ORMs:

   - **Simpler Syntax**: No need to write long, complex queries rather using ORMs would make it easy logical and smaller using objects.

   - **Abstraction**: Usage of ORMs makes it easy to migrate the code if we're going to move from one database to another. So suppose we're using Prisma (PostgreSQL) on our Node.js backend and now we want to shift to Mongoose (MongoDB). There won't be much of a change in the Node.js code that we'll write.

   - **Type Safety & Autocompletion**: Previously when we used to write the queries, and ran them the `pgclient` used to give us any type of result and hence this was the reason we were not able to get auto-completions. Using the ORMs like Prisma we're inferring the types and hence it auto-completes the code lines.

   - **Migrations**: Migrations are the records that are present in the `migrations` folder of the project, that keep a track of the state of the database. Simply means what all operations we did (what all queries we ran) to get the database in the current state it is from its initial stage, those all operations are present in the migrations with their date and time. So ORMs make it easier to manage migrations.

### What is Prisma?

1. Prisma is the next gen Typescript & Node.js ORM. It unlocks a new level of developer experience when working with databases thanks to its _intuitive data-model_, _automated migrations_, _type safety_ & _auto completion_. Reading the following docs would give it more context: [Prisma Docs](https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-3)

### Installing Prisma:

1. Initialize an empty Node Project:

```bash
npm init -y
```

2. Add dependencies:

```bash
npm install prisma typescript ts-node @types/node --save-dev
```

3. Initialize Typescript:

```bash
npx tsc --init
Change `rootDir` to `src`
Change `outDir` to `dist`
```

4. Initialize Prisma:

```bash
npx prisma init
```

### Writing Prisma Code:

1. This is how we create a table in prisma. (Note: All the code is written in the `schema.prisma` file)

```prisma
model User {
  id       Int    @id @default(autoincrement())
  username String @unique
  password String
  age      Int
  city     String
}
```

2. Once we create a table (model) in prisma, we have to migrate it and it is done by this command:

```bash
npx prisma migrate dev
```

3. To run the prisma in our backend Node.js app we also have to generate the prisma `client`:

```bash
npx prisma generate
```
