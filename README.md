<==========================================>
## Getting Started
git clone https://casava-dev@bitbucket.org/casava-dev/casava-open.git

cd casava-open

- run: npm install to install dependencies, 

- npm run create:migration <migration-table-name>

- npm run create:migration <migration-table-name> --sql-file to add the sql files

- npm run create:seed <seed-file-name>

- npm run create:seed <seed-file-name> --sql-file //to add the sql files

- npm run migrate_up runs migration

- npm run migrate_down drops all migrations

- npm run migrate:fresh drops and runs the migration

- npm run seed:up //seed data

- npm run seed:down //drop seed

- Download .env file and put it in the root folder.

- npm run dev starts the dev server

- npm run start for production server

- npm run test to run test cases
<==========================================>

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **migrations**           | Contains the migration files  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains all source code                          |
| **src/api**              | Contains queries, services, middlewares, controllers and routes for all endpoints |
| **src/config**           | Contains application configurations including environment-specific configurations 
| **src/lib**              | Contains common helpers functions and libraries to be used across the app |  
| **src/services**         | Contains third-party services configurations |
| **src**/app.js           | Entry point to express app                                                               |
| eslintrc.json            | Config settings for eslint code style checking    |
| database.json            | Contains databases url                                                              |
| package.json 