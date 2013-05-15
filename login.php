<?php
$users = array
(
	'admin'		=> 'zizinka',
	'user'		=> 'silvestris',
);

if(!isset($_POST) || !isset($_POST['login']) || !isset($_POST['password']))
	return false;

if(empty($_POST['login']) || empty($_POST['password']))
	return false;

$login = strtolower($_POST['login']);
if(!array_key_exists($login, $users))
	return false;

if(empty($users[$login]))
	return false;

if($_POST['password'] != $users[$login])
	return false;


echo '1';
?>