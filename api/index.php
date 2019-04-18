<?php
require_once("mail.php");

$cfg = json_decode(file_get_contents("cfg.json"));
$request = json_decode(file_get_contents('php://input'));

$res["err"] = "$request->cmd no callable.";
if(is_callable($request->cmd)){
  $res = call_user_func ($request->cmd , $request);
}
print json_encode($res);

 ?>
