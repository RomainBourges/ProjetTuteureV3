<?php
session_start();
require("utils.php");
require("config.php");
require("db_connect.php");

$requestURI = explode("?", $_SERVER["REQUEST_URI"]);
$requestURI = substr($requestURI[0], strlen($config["uri_prefix"]));

if(!isset($routes[$requestURI])){
    $handler = $routes["/error"];
}else{
    $handler = $routes[$requestURI];
}

require("handlers/$handler.php");