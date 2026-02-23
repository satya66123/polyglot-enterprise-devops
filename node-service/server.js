const express = require("express");
const mysql = require("mysql2/promise");
const { MongoClient } = require("mongodb");

const app = express();

const mysqlPool = mysql.createPool({
  host:"mysql",
  user:"root",
  password:"root",
  database:"polyglotdb"
});

const mongo = new MongoClient("mongodb://mongo:27017");
const mdb = mongo.db("polyglotmongo");

app.get("/mysql/join", async (req,res)=>{
  const [rows] = await mysqlPool.query(`
    SELECT u.name,o.product,o.amount
    FROM users u
    JOIN orders o ON u.id=o.user_id
  `);
  res.json(rows);
});

app.get("/mongo/aggregation", async (req,res)=>{
  const data = await mdb.collection("users").aggregate([
    {$lookup:{
      from:"orders",
      localField:"_id",
      foreignField:"user_id",
      as:"orders"
    }},
    {$project:{
      name:1,
      total_spent:{$sum:"$orders.amount"}
    }}
  ]).toArray();

  res.json(data);
});

app.listen(3000);