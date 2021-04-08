<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdList"])){
    echo json_encode(["message" => "Liste introuvable"]);
    exit;
}
if(!isset($_POST["Title"]) || !isset($_POST["Deadline"])){
    echo json_encode(["message" => "veuillez saisir tous les champs"]);
    exit;
}

$deadlineDate=date_create($_POST["Deadline"]);
if(!$deadlineDate){
    echo json_encode(["message" => "veuillez choisir une date valide"]);
    exit;
}

$title = substr($_POST["Title"], 0, $parameters["Title"]);
$description = !isset($_POST["Description"]) ? "" : substr($_POST["Description"], 0, $parameters["Description"]);
try{
    $request = $db->prepare("CALL InsertTask(?,?,?,?)");
    $request->execute([$_POST["IdList"], $title, $description, date_format($deadlineDate, "Y-m-d")]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}
$verify_request = $request->rowCount();

if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de l'ajout de la tache dans la base de donnees"]);
    exit;
}

echo json_encode(["message" => "La tache a bien ete ajoutee"]);
exit;