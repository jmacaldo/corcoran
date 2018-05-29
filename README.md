## Coding Challenge for the Concoran Group :rocket:

This is a simple demonstration of creating a restful API, consuming the data, and displaying the data on the DOM. This app is built on the React-Redux framework. The API's data resides in a PostgreSQL database that's hosted on Heroku. Data Sort functionality is achieved with  Sequelize's `[[order: "title", "ASC"]]` query parameter.

Live demo can be found here: https://jmacaldocorcoran.herokuapp.com/


API endpoints are:
`
https://jmacaldocorcoran.herokuapp.com/api/presidents (default order)
https://jmacaldocorcoran.herokuapp.com/api/presidents/az (A-Z sorted)
https://jmacaldocorcoran.herokuapp.com/api/presidents/za (Z-A sorted)
`



Install this app on your local machine with:
`npm install`

Note: ENV file is not included in this repo (needed for database credentials). Message me for access.
