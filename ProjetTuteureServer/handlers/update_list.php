<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdList"])){
    echo json_encode(["message" => "Liste introuvable"]);
    exit;
}

if(!isset($_POST["Title"]) && !isset($_POST["Description"])){
    echo json_encode(["message" => "veuillez modifier au moins un champ"]);
    exit;
}

$title = !isset($_POST["Title"]) ? "" : substr($_POST["Title"], 0, $parameters["Title"]);
$description = !isset($_POST["Description"]) ? "" : substr($_POST["Description"], 0, $parameters["Description"]);

try{
    $request = $db->prepare("CALL setList(?,?,?)");
    $request->execute([$_POST["IdList"],$title, $description]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

echo json_encode(["message" => "La liste a bien ete modifiee"]);
exit;
