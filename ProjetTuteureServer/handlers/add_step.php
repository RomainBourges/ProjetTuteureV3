<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdTask"])){
    echo json_encode(["message" => "tache introuvable"]);
    exit;
}
if(!isset($_POST["Title"])){
    echo json_encode(["message" => "veuillez saisir un titre"]);
    exit;
}

$title = substr($_POST["Title"], 0, $parameters["Title"]);
$description = !isset($_POST["Description"]) ? "" : substr($_POST["Description"], 0, $parameters["Description"]);

try{
    
$request = $db->prepare("CALL InsertStep(?,?,?)");
$request->execute([$_POST["IdTask"],$title, $description]);
}catch(Exception $e){
    echo json_encode([
        "message" => messageException($e),
    ]);
    exit;
}
$verify_request = $request->rowCount();

if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de l'ajout de l'etape' dans la base de donnees"]);
    exit;
}

echo json_encode(["message" => "L'etape a bien ete ajoutee"]);
exit;