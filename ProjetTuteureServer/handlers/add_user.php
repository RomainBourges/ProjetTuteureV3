<?php

header("Content-Type: application/json; charset=UTF-8");
http_response_code(400);
if(!isset($_GET["email"]) || !isset($_GET["password"]) || !isset($_GET["password_conf"])){
    echo json_encode([
        "message" => "veuillez remplir tous les champs",
    ]);
    exit;
}

if($_GET["password"] !== $_GET["password_conf"]){
    echo json_encode([
        "message" => "les mdp ne correspondent pas",
    ]);
    exit;
}

$password = password_hash($_GET["password"], PASSWORD_BCRYPT);

try{
    $request = $db->prepare("CALL InsertUser(?,?)");
    $request->execute([$_GET["email"], $password]);
    $message = "none";
}catch(Exception $e){
    echo json_encode([
        "message" => messageException($e),
    ]);
    exit;
}
http_response_code(200);
echo json_encode([
    "message" => "Votre compte a bien été cree et un email de confirmation vous a ete envoye",
]);