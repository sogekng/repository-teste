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
$mensagem = $_POST['mensagem'];

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
    $mail->Subject = 'Duvidas';
    $mail->Body    = '<table width="100%" height="100%" cellspacing="20" cellpadding="0" border="0" bgcolor="#eaeaeb" style="background-color:#eaeaeb">
        <tbody><tr>
            <td align="center" valign="middle">
                <font align="center" color="#0" face="Verdana, Arial, sans-serif" size="1" style="padding-bottom:5px;display:block;line-height:16px"></font>
                <table width="800" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff" align="center">
                    <tbody><tr>
                    </tr>
                    <tr>
                        <td bgcolor="blue" width="800" height="180" valign="middle" style="text-align:center">
                            <div><span style="font-family:"Myriad Pro",Arial,sans-serif;font-size:38px;display:block">Confirmação de Envio de formulario<br></span></div>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" style="text-align:center">
                            <table width="100%" cellpadding="0" cellspacing="45" border="0">
                                <tbody><tr>
                                    <td>
                                        <span style="font-family:"Myriad Pro",Arial,sans-serif;font-size:16px;color:#494949;display:block">
                                            
                                            <span style="font-size:30px;display:block">Olá '.$from.' Tem alguém com dúvida, veja o que ela escreveu</span>
                                            <br><span style="display:flex;align-items:center;font-size:1rem;">Seu Nome é '.$nome.'</span>
                                            <br><span style="display:flex;align-items:center;font-size:1rem;">Seu E-mail é '.$email.'</span>
                                            <br><span style="display:flex;align-items:center;font-size:1rem;">Seu Numero de telefone é '.$telefone.'</span>
                                            <br><span style="display:flex;align-items:center;font-size:1rem;">Sua Mensagem é "'.$mensagem.'"</span>
                                            <br><span style="display:flex;align-items:center;font-size:1,2rem;"><a href="http://api.whatsapp.com/send?1=pt_BR&phone=55'.$telefone.'">Entre em contanto com ele pelo o whatsapp</a></span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    </body>';

if($nome == '' || $email == '' || $telefone == '' || $mensagem == ''){
    echo '<script>window.location.replace("index.html");</script>';
    echo '<script>alert("Campos vazios!");</script>';
} else {
    if($mail->send()){
        echo '<script>window.location.replace("index.html");</script>';
        echo '<script>alert("Email enviado com sucesso!");</script>';
    }else{ 
        echo '<script>window.location.replace("index.html");</script>';
        echo '<script>alert("Erro ao enviar email!");</script>';
    }
}

}catch(Exception $e){ 
echo "Erro ao enviar o email. Erro: {$mail->ErrorInfo}";
}