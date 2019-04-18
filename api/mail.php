<?php
require '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

function send_contactmail($req){
  global $cfg;
  $cfgMail = $cfg->phpmailer;


  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->Host = $cfgMail->host;
  $mail->Port = $cfgMail->port;
  $mail->SMTPAuth = $cfgMail->SMTPAuth;
  $mail->Username = $cfgMail->username;
  $mail->Password = $cfgMail->password;
  $mail->setFrom('hola@snowfunclub.com.ar', 'SFC Contacto');
  $mail->addAddress('hola@snowfunclub.com.ar', 'Escuela');
  //if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
  if ($mail->addReplyTo($req->from, $req->name)) {
      $mail->Subject = 'Contacto web - SFC';
      $mail->isHTML(false);
      $mail->Body = <<<EOT
Email: {$req->from}
Name: {$req->name}
Message: {$req->message}
EOT;
  $res = array();
          if (!$mail->send()) {
              $res["err"] = true;
              $res["msg"] = 'Sorry, something went wrong. Please try again later. ' . $mail->ErrorInfo;
          } else {
              $res["err"] = false;
              $res["msg"] = 'Message sent! Thanks for contacting us.';
          }
      } else {
          $res["err"] = true;
          $res["msg"] = 'Invalid email address, message ignored.';
      }

  return $res;
}
 ?>
