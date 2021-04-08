<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdTask"])){
    echo json_encode(["message" => "Tache introuvable"]);
    exit;
}

if(!isset($_POST["Title"]) && !isset($_POST["Description"]) && !isset($_POST["Deadline"])){
    echo json_encode(["message" => "veuillez modifier au moins un champ"]);
    exit;
}

$title = !isset($_POST["Title"]) ? "" : substr($_POST["Title"], 0, $parameters["Title"]);
$description = !isset($_POST["Description"]) ? "" : substr($_POST["Description"], 0, $parameters["Description"]);
if(!isset($_POST["Deadline"]) || sizeof($_POST["Deadline"]) === 0){
    $deadlineDate = null;
}else{
    $date= !isset($_POST["Deadline"]) ? "" : date_create($_POST["Deadline"]);
    if(!$deadlineDate){
        echo json_encode(["message" => "veuillez choisir une date valide"]);
        exit;
    }
    $deadlineDate = date_format($deadlineDate, "Y-m-d");
}

try{
    $request = $db->prepare("CALL setTask(?,?,?,?)");
    $request->execute([$_POST["IdTask"], $title, $description, $deadlineDate]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

echo json_encode(["message" => "La tache a bien ete modifiee"]);
exit;