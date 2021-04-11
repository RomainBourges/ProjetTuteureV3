<?php

header("Content-Type: application/json; charset=UTF-8");
http_response_code(200);
if(!isset($_POST["IdUser"])){
    echo json_encode(["message" => "utilisateur inconnu"]);
    exit;
}

if(!isset($_POST["Title"])){
    echo json_encode(["message" => "veuillez saisir un titre"]);
    exit;
}

$title = substr($_POST["Title"], 0, $parameters["Title"]);
$description = !isset($_POST["Description"]) ? "" : substr($_POST["Description"], 0, $parameters["Description"]);

try{
    $request = $db->prepare("CALL InsertList(?,?,?)");
    $request->execute([$_POST["IdUser"],$title, $description]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de l'ajout de la liste dans la base de donnees"]);
    exit;
}
//http_response_code(200);
echo json_encode(["message" => "La liste a bien ete ajoutee"]);
exit;


