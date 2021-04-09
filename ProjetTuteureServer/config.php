<?php
$config["uri_prefix"] = "/ProjetTuteureServer";

$config["db_host"] = "localhost";
$config["db_name"] = "toDoList";
$config["db_port"] = "3307";
$config["db_user"] = "root";
$config["db_password"] = "";

$routes = [
    "/verify_user" => "verify_user",
    "/signout" => "signout",
    "/forgot_password" => "forgot_password",
    "/add_list" => "add_list",
    "/add_task" => "add_task",
    "/add_step" => "add_step",
    "/add_user" => "add_user",
    "/delete_step" => "delete_step",
    "/delete_task" => "delete_task",
    "/delete_list" => "delete_list",
    "/delete_user" => "delete_user",
    "/update_mail" => "update_mail",
    "/update_password" => "update_password",
    "/update_list" => "update_list",
    "/update_task" => "update_task",
    "/update_step" => "update_step",
    "/get_lists" => "get_lists",
    "/get_tasks" => "get_tasks",
    "/get_steps" => "get_steps",
    "/add_list" => "add_list",
    "/error" => "error",
];

$parameters = [
    "Title" => 30,
    "Description" => 300,
    "Checked" => 1,
];