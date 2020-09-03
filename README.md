# Team-049-Group-A-BackEnd

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3543386bc16a4fcc8e9f7b7a66aa4ab3)](https://app.codacy.com/gh/BuildForSDGCohort2/Team-049-Group-A-BackEnd?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/Team-049-Group-A-BackEnd&utm_campaign=Badge_Grade_Settings)

### Project Setup

1. Fork or clone the app and create a file named .env in the root of your project.

2. Copy the content of .env.example file to your .env file and fill in the database information as below:

```
DB_CLIENT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-chosen-db-password
DATABASE=emed
```

3. Create a database named **_emed_** in MySQL

4. Install the modules

```
npm install
```

5. Install the Knex CLI using NPM to help you run migration commands on your PC.

```
sudo npm install knex -g
```

6. Run `knex migrate:latest` to add the lates migration(s) tables in your database.
   **NB: for help with Knex commands, just type "knex" in your CMD tor Terminal**

7. Start the app

```
npm start
```

### Database Design

![Database Design](https://github.com/BuildForSDGCohort2/Team-049-Group-A-BackEnd/blob/master/database-design.jpeg?raw=true)
