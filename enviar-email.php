<?php

require_once('PHPMailer-master/src/PHPMailer.php');
require_once('PHPMailer-master/src/SMTP.php');
require_once('PHPMailer-master/src/Exception.php');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$curso = $_POST['curso'];

try{
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'pguto5@gmail.com';
    $mail->Password   = 'lopaejvotfwtcldw';
    $mail->Port = 587;

    $mail->setFrom('gutsantos3@gmail.com');
    $mail->addAddress('gutsantos3@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'Nome: <b>'.$nome.'</b> <br> E-mail: <b>'.$email.'</b> <br> Telefone: <b>'.$telefone.'</b> <br> Curso: <b>'.$curso.'</b>';

    if($nome == '' || $email == '' || $telefone == '' || $curso == ''){
        echo '<script>alert("Campos vazios!");</script>';
        header("location: index.html");
    } else {
        if($mail->send()){
            echo 'Email enviado com sucesso';
            header("location: index.html");
        }else{ 
            echo 'Erro ao enviar o email';
        }
    }
}catch(Exception $e){ 
    echo "Erro ao enviar o email. Erro: {$mail->ErrorInfo}";
}