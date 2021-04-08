<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdStep"])){
    echo json_encode(["message" => "Etape introuvable"]);
    exit;
}

if(!isset($_POST["Title"]) && !isset($_POST["Description"]) && !isset($_POST["Checked"])){
    echo json_encode(["message" => "veuillez modifier au moins un champ"]);
    exit;
}

$title = !isset($_POST["Title"]) ? "" : substr($_POST["Title"], 0, $parameters["Title"]);
$description = !isset($_POST["Description"]) ? "" : substr($_POST["Description"], 0, $parameters["Description"]);
$checked = !isset($_POST["Checked"]) ? "" : substr($_POST["Checked"], 0, $parameters["Checked"]);

try{
    $request = $db->prepare("CALL setStep(?,?,?)");
    $request->execute([$_POST["IdStep"],$title, $description]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

echo json_encode(["message" => "L'etape a bien ete modifiee"]);
exit;
