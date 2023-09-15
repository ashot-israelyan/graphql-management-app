const express = require('express');
require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schena/schema');
const connectDb = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDb();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, () => console.log(`Server running on port ${port}`));
