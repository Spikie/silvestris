<?php
error_reporting(0);

$smtp_host = 'smtp.nexus.sk';
$smtp_port = '25';
$smtp_helo = 'EHLO';
$smtp_auth = true;
$smtp_login = 'info@woowco.com';
$smtp_pass = 'mickiewiczova2';
$smtp_security = 'tls';

$return = array
(
	'success'	=> false,
	'error'		=> '',
);

function send()
{
	global $return;
	echo json_encode($return);
	exit;
}


if(!isset($_POST) || !isset($_POST['action']) || !isset($_POST['name']) || !isset($_POST['email']))
{
	$return['error'] = 'Unknown error';
	send();
}

if($_POST['action'] != 'send')
{
	$return['error'] = 'Unknown error';
	send();
}

if(empty($_POST['name']) || empty($_POST['email']))
{
	$return['error'] = 'Prosím, vyplňte všetky povinné položky.';
	send();
}


$text = 'Nová požiadavka o prístup na FTP zo stránky SILVESTRIS.SK
---------------------------------------------------------

Meno: '.$_POST['name'].'
Firma: '.$_POST['firma'].'
E-mail: '.$_POST['email'];

require('libs/lib.htmlMimeMailTLS.php');

$mail = new htmlMimeMail();
$mail->setHeader('Date', date('r'));
$mail->setCRLF("\n");
$mail->setText($text);

$mail->setFrom('silvestris@silvestris.sk');
$mail->setSubject('SILVESTRIS - Ziadost o FTP');

$mail->setSMTPParams
(
	$smtp_host,
	$smtp_port,
	$smtp_helo,
	$smtp_auth,
	$smtp_login,
	$smtp_pass,
	$smtp_security
);

$result = $mail->send(array('silvestris@silvestris.sk'), 'smtp');


if(!$result)
	$return['error'] = 'Nepodarila sa odoslať žiadosť.';
else
	$return['success'] = true;

send();
?>