from flask import Flask, jsonify
import mysql.connector
from pymongo import MongoClient

app = Flask(__name__)

mysql_conn = mysql.connector.connect(
    host="mysql",
    user="root",
    password="root",
    database="polyglotdb"
)

mongo = MongoClient("mongodb://mongo:27017/")
mdb = mongo.polyglotmongo

@app.get("/mysql/join")
def mysql_join():
    cursor = mysql_conn.cursor(dictionary=True)
    cursor.execute("""
        SELECT u.name, o.product, o.amount
        FROM users u
        JOIN orders o ON u.id=o.user_id
    """)
    return jsonify(cursor.fetchall())

@app.get("/mongo/aggregation")
def mongo_agg():
    pipeline = [
        {"$lookup":{
            "from":"orders",
            "localField":"_id",
            "foreignField":"user_id",
            "as":"orders"
        }},
        {"$project":{
            "name":1,
            "total_spent":{"$sum":"$orders.amount"}
        }}
    ]
    data = list(mdb.users.aggregate(pipeline))
    return jsonify(data)

app.run(host="0.0.0.0",port=5000)