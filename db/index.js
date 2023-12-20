const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "task8",
  password: "1111",
  port: 5432,
});
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.log("error", err));

  module.exports = client;