# Angular Solo Code Challenge

This assignement covers the full-stack, using Angular and AJAX requests on the front end, and Node/Express routing to a PostgreSQL database on the back end.

---

Fork, clone, and run `npm install` to get started.

## Dependencies included in package.json

* angular
* angular-route
* body-parser
* bootstrap
* express
* pg

## Database Structure

Run the sql in `database.sql`.

## Server API Endpoints

* `GET /heroes` : returns all heroes and associated power data.
* `POST /heroes` : create a new hero in the database. Duplicates are not allowed. Only one power per hero can be stored.
* `DELETE /heroes/:id` : deletes the specified hero.
* `PUT /heroes/:id` : updates a given hero. **Incomplete (requires testing)**
* `GET /powers` : returns all super power names and descriptions.

**Status of 500 is returned on all server errors.**
