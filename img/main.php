<?php

if(isset($_POST) && count($_POST) > 0){
	fReturn($_POST);
}else{
	fReturn([], false);
}

function fReturn($data, $type = true){
	$message = '';
	if($type){
		$message = 'Данные успешно получены';
	}else{
		$message = 'Получение данных не произошло';
	}

	exit(json_encode([
		'TYPE'=>$type,
		'MESSAGE' => $message,
		'DATA' => $data
	]));
}