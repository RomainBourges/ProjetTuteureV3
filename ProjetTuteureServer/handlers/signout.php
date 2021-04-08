<?php
$_SESSION = array();
session_destroy();
if(!isset($_SESSION)){
    echo json_encode([
        "message" => "Vous avez bien ete deconnecte",
    ]);
    exit;
}else{
    echo json_encode([
        "message" => "Une erreur s'est produite lors de la deconnexion",
    ]);
    exit;
}