const express = require("express");

const scheme = require("./scheme/scheme.js");

const { graphqlHTTP } = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: scheme,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server ishga tushdi");
});
