<?php
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

//$post=json_decode($json, true));

if(!isset($_POST["email"]) || !isset($_POST["password"])){
    echo json_encode([
        "message" => "remplir tous les champs",
    ]);
    exit;
}

$request = $db->prepare("SELECT * FROM users WHERE Email=?");
$request->execute([$_POST["email"]]);
$user = $request->fetch();

if (!$user){
    echo json_encode([
        "message" => "user inconnu",
    ]);
    exit;
}

$ok = password_verify($_POST["password"], $user["Password"]);

if(!$ok){
    echo json_encode([
        "message" => "mauvais mdp",
    ]);
    exit;
}

$_SESSION["user"] = $user;

echo json_encode([
    "message" => "OK",
    "user" => $user,
]);