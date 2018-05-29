## Coding Challenge for the Corcoran Group :rocket:

This is a simple demonstration of creating a restful API, consuming the data, and displaying the data on the DOM. This app is built on the React-Redux framework. The API's data resides in a PostgreSQL database that's hosted on Heroku. Data Sort functionality is achieved with  Sequelize's `[[order: "title", "ASC"]]` query parameter.

I've chosen to build the API on Node instead of Azure. I believe it's not possible to install API management (required for building and customizing APIs in Azure) with a free-tier account. If I am mistaken, I'd be more than happy to further investigate and build the API on Azure (if indeed possible).

Live demo can be found here: https://jmacaldocorcoran.herokuapp.com/ There might be some delay in loading the page. It's a free-tier Heroku application, after all. :raised_hands:


API endpoints are:
`
https://jmacaldocorcoran.herokuapp.com/api/presidents (default order)
https://jmacaldocorcoran.herokuapp.com/api/presidents/az (A-Z sorted)
https://jmacaldocorcoran.herokuapp.com/api/presidents/za (Z-A sorted)
`

Install this app on your local machine with:
`npm install` followed by `npm run start`

Note: ENV file is not included in this repo (needed for database credentials). Message me for access.
