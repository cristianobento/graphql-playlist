const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema, // it's the same as  schema: schema That's because we're using ES6 here...
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listening for request on port 4000");
});

/*
{
  book(id: "1") {
    name
    genre
    id
  }
}
*/

