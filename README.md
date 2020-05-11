# Bookmarks API

CRUD Express app for connecting with a PostgreSQL database with a heavy emphasis on integration testing.

## Scripts:

Start the app `npm start`

Start nodemon for the app `npm run dev`

Run the tests in watch mode `npm test`

Migrate the database at `DB_URL`, with `npm run migrate`

Migrate the database at `TEST_DB_URL`, with `npm run migrate:test`

## Env Setup:

Remember to create an `.env` file with `DB_URL` and `TEST_DB_URL`

## Seeding database:

`psql -U dunder_mifflin -d blogful -f ./seeds/seed.bookmarks.sql`

## Built with my Express Boilerplate!

This express app was started using my boilerplate found at `https://github.com/cbonner26118/express-boilerplate`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
