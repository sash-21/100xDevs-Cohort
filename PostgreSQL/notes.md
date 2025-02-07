## PostgreSQL Database:

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
