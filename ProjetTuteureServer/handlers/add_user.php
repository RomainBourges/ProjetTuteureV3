<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["email"]) || !isset($_POST["password"]) || !isset($_POST["password_conf"])){
    echo json_encode([
        "message" => "veuillez remplir tous les champs",
    ]);
    exit;
}

if($_POST["password"] !== $_POST["password_conf"]){
    echo json_encode([
        "message" => "les mdp ne correspondent pas",
    ]);
    exit;
}

$password = password_hash($_POST["password"], PASSWORD_BCRYPT);

try{
    $request = $db->prepare("CALL InsertUser(?,?)");
    $request->execute([$_POST["email"], $password]);
    $message = "none";
}catch(Exception $e){
    echo json_encode([
        "message" => messageException($e),
    ]);
    exit;
}

echo json_encode([
    "message" => "Votre compte a bien été cree et un email de confirmation vous a ete envoye",
]);