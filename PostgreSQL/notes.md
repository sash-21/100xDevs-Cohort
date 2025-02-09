# PostgreSQL Database:

1. This is how we create a table in PostgreSQL:

```sql
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at
);
```

2. This is how we delete a table in PgSQL:

```sql
DROP TABLE Users;
```

3. This is how we insert data in PgSQL:

```sql
INSERT INTO Users(username, email, password) VALUES ('sahil.shah', 'sahil21@gmail.com', '123@something');
```

4. This is how we update the data in PgSQL:

```sql
UPDATE Users
SET email = 'sahil21@gmail.com'
WHERE username = 'sahil.shah';
```

5. This is how we delete a record from a table in PgSQL:

```sql
DELETE FROM Users
WHERE username = 'sahil.shah';
```

6. This is how we view the data present in a table in PgSQL:

```sql
SELECT * from Users
WHERE id = 1;
```

## Important Concepts

### SQL Injections:

1. SQL Injections is one of the prominent way through which attackers try to down the databases, retrieve the data from the DBs basically exploit the application's DB. This is performed when a attacker sends a string that contains malicious SQL code along with the data that application asks for, that gets performed with the main query.

2. This can be avoided by sending the user data and the SQL query separately to the database, instead of appending the user data in the SQL string itself.

3. So we should do this:

```typescript
// effective against SQL Injections
const username: string = req.body.username;
const email: string = req.body.email;
const password: string = req.body.password;

const insertQuery = `INSERT INTO Users (username, email, password) VALUES ($1, $2, $3);`;
await pgClient.query(insertQuery, [username, email, password]);

res.json({
  message: "You have signed up successfully!",
});
```

Instead of doing this:

```typescript
// SQL Injection prone code
const username: string = req.body.username;
const email: string = req.body.email;
const password: string = req.body.password;

const insertQuery = `INSERT INTO Users (username, email, password) VALUES ('${username}', '${email}', '${password}');`;
await pgClient.query(insertQuery);

res.json({
  message: "You have signed up successfully!",
});
```

### Relationships in PgSQL:

1. These are formed in many ways such as `one to one`, `one to many`, `many to one` & `many to many`. Basically we use `PRIMARY KEY` & `FOREIGN KEY` in different tables to form these relationships.

### Transactions:

1. A Transaction ensures that when a bunch of queries are running together, then all of them must run or none of them must run. Hence a Transaction never leaves a DB in partial state.

2. It is implemented using `BEGIN` & `COMMIT` statements.

### Joins

1. A `JOIN` is used when two tables are in a relationship and we want the data from both the tables in a combined singular table. We use some queries like these:

```sql
SELECT u.id, u.username, u.email, a.street, a.city, a.country, a.pincode
FROM Users u
JOIN Addresses a ON u.id = a.user_id
WHERE u.id = 1;
```

2. So in the above query we are retrieving some columns of users table while also some columns of the addresses table and forming a combined table on the basis of the user id field which has a one on one relation between two tables.

3. There are 4 types of Joins:

   - `INNER JOIN`: This is the regular one, if the users table has a user entry for which there's no entry in the address table then this would return an empty array of records. This means _Table A should have a record AND Table B should have a corresponding record_ only then it would return a value.

   - `LEFT JOIN`: This one returns the values from the left table or from the one which we're creating the join. So for a user of there's no address even then the `LEFT JOIN` would return a record containing the user data. This means _Table A should have a record AND Table B is optional to have a record_ only then it would return a value.

   - `RIGHT JOIN`: This is the total opposite of the left join. Suppose the address table has an address which is correspondent to not one in the users table then the `RIGHT JOIN` would return a record containing the address data. This means _Table A is optional to have a record AND Table B should have a record_ only then it would return a value.

   - `FULL JOIN`: This takes all the data from both the tables which have no correspondents in the other table and also takes the data which do have correspondents. This means _Table A is optional to have a record AND Table B is optional to have a record_.
