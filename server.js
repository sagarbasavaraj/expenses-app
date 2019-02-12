const express = require("express");
const next = require("next");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const mongoose = require('./server/config/mongoose');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const db = mongoose();
    const {expenseSchema} = require('./server/graphql/index');
    
    server.use('*', cors());

    server.use('/graphql', cors(), graphqlHTTP({
      schema: expenseSchema,
      rootValue: global,
      graphiql: true
    }));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT || 4000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:4000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
