<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdTask"])){
    echo json_encode(["message" => "tache inconnue"]);
    exit;
}

$request = $db->prepare("SELECT getTaskSteps(?);");
$request->execute([$_POST["IdTask"]]);
$steps = $request->fetch();
var_dump($steps);

if($steps[0] === null){
    echo json_encode(["message" => "Vous n'avez pas encore cree d'etape"]);
    exit;
}

$step = explode("£", $steps[0]);
for($i = 0; $i < sizeof($step); $i++){
    $step[$i] = explode("¤", $step[$i]);
    $step[$i] = [
        "IdStep" => $step[$i][0],
        "Taskid" => $step[$i][1],
        "Title" => $step[$i][2],
        "Description" => $step[$i][3],
        "CheckStep" => $step[$i][4],
    ];
}

echo json_encode([
    "steps" => $step,
    "message" => "",
]);