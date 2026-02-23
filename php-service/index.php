<?php
$pdo = new PDO("mysql:host=mysql;dbname=polyglotdb","root","root");

$mongo = new MongoDB\Client("mongodb://mongo:27017");
$mdb = $mongo->polyglotmongo;

if ($_GET["type"]=="mysql") {
    $q=$pdo->query("
    SELECT u.name,o.product,o.amount
    FROM users u JOIN orders o ON u.id=o.user_id
    ");
    echo json_encode($q->fetchAll());
}

if ($_GET["type"]=="mongo") {
    $pipeline = [
      ['$lookup'=>[
        'from'=>'orders',
        'localField'=>'_id',
        'foreignField'=>'user_id',
        'as'=>'orders'
      ]],
      ['$project'=>[
        'name'=>1,
        'total_spent'=>['$sum'=>'$orders.amount']
      ]]
    ];
    $result = $mdb->users->aggregate($pipeline);
    echo json_encode(iterator_to_array($result));
}