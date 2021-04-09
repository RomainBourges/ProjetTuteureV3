<?php
header("Content-Type: application/json; charset=UTF-8");
http_response_code(400);


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
http_response_code(200);
$_SESSION["user"] = $user;

echo json_encode([
    "message" => "OK",
    "user" => $user,
]);